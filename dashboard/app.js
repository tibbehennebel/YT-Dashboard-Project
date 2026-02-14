const API_BASE = '/api';

const channelForm = document.getElementById('channel-form');
const entryForm = document.getElementById('entry-form');
const channelSelect = document.getElementById('channel-select');
const summaryDiv = document.getElementById('summary');

let channels = [];
let entries = [];
let viewsChart;

async function fetchJSON(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

async function loadData() {
  channels = await fetchJSON(`${API_BASE}/channels`);
  entries = await fetchJSON(`${API_BASE}/entries`);
  renderChannelsSelect();
  renderSummary();
  renderChart();
}

function renderChannelsSelect() {
  channelSelect.innerHTML = '';
  channels.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = `${c.owner === 'jij' ? 'Jij' : 'Maat'} – ${c.name}`;
    channelSelect.appendChild(opt);
  });
}

function renderSummary() {
  const byChannel = {};
  entries.forEach(e => {
    if (!byChannel[e.channel_id]) byChannel[e.channel_id] = [];
    byChannel[e.channel_id].push(e);
  });

  let html = '<table><thead><tr><th>Kanaal</th><th>Laatste views</th><th>Laatste subs</th></tr></thead><tbody>';

  channels.forEach(c => {
    const list = (byChannel[c.id] || []).sort((a,b)=>a.date.localeCompare(b.date));
    const last = list[list.length - 1];
    html += `<tr>
      <td>${c.owner === 'jij' ? 'Jij' : 'Maat'} – ${c.name}</td>
      <td>${last ? last.views : '-'}</td>
      <td>${last ? last.subs : '-'}</td>
    </tr>`;
  });

  html += '</tbody></table>';
  summaryDiv.innerHTML = html;
}

function renderChart() {
  const byDateOwner = {};
  entries.forEach(e => {
    const ch = channels.find(c => c.id === e.channel_id);
    if (!ch) return;
    const key = `${e.date}-${ch.owner}`;
    byDateOwner[key] = (byDateOwner[key] || 0) + e.views;
  });

  const dates = [...new Set(entries.map(e => e.date))].sort();
  const owners = ['jij', 'maat'];

  const datasets = owners.map(owner => ({
    label: owner === 'jij' ? 'Jij' : 'Maat',
    data: dates.map(d => byDateOwner[`${d}-${owner}`] || 0),
    borderColor: owner === 'jij' ? '#4ade80' : '#f97373',
    backgroundColor: 'transparent'
  }));

  const ctx = document.getElementById('viewsChart').getContext('2d');
  if (viewsChart) viewsChart.destroy();
  viewsChart = new Chart(ctx, {
    type: 'line',
    data: { labels: dates, datasets },
    options: { responsive: true, scales: { y: { beginAtZero: true } } }
  });
}

channelForm.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(channelForm);
  const payload = Object.fromEntries(formData.entries());
  const created = await fetchJSON(`${API_BASE}/channels`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  channels.push(created);
  channelForm.reset();
  renderChannelsSelect();
});

entryForm.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(entryForm);
  const payload = Object.fromEntries(formData.entries());
  payload.views = Number(payload.views);
  payload.subs = Number(payload.subs);
  const created = await fetchJSON(`${API_BASE}/entries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  entries.push(created);
  renderSummary();
  renderChart();
});

loadData().catch(err => {
  console.error(err);
  summaryDiv.textContent = 'Error bij laden data';
});
