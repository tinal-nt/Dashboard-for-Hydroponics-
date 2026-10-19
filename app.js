// ==========================================
// 1. LANGUAGE TRANSLATION DICTIONARY (i18n)
// ==========================================
const translations = {
  en: {
    title: "Hydroponics OS",
    subtitle: "Precision Nutrient Management & Root Zone Telemetry",
    simOn: "Simulation: ON",
    simOff: "Simulation: OFF",
    mqttLive: "MQTT Live",
    cardEc: "EC (Nutrients)",
    subTds: "TDS",
    cardPh: "Solution pH",
    subPh: "Optimal: 5.5 - 6.5",
    cardWtemp: "Water Temp (Root)",
    subWtemp: "Target: 18 - 22 °C",
    cardWater: "Reservoir Level",
    subWater: "Supply Tank Depth",
    cardAtemp: "Canopy Temp",
    subHumidity: "Humidity",
    cardLight: "Solar / Light",
    subLight: "PPFD Indicator",
    chartTitle: "Nutrient (EC) & Acidity (pH) Stability",
    chartDatasetEC: "Nutrient EC (mS/cm)",
    chartDatasetPH: "Solution pH",
    actuatorsTitle: "Hydroponic Actuators & Dosing",
    modeHeader: "Dosing & Cycle Mode",
    modeAutoBtn: "Closed Loop",
    modeManualBtn: "Manual Override",
    pumpHeader: "Circulation / NFT Pump",
    btnPumpOn: "START PUMP",
    btnPumpOff: "STOP PUMP",
    lightHeader: "Grow Lights Relay",
    btnLightOn: "LIGHTS ON",
    btnLightOff: "LIGHTS OFF",
    doseHeader: "Peristaltic Dosing (5ml Pulse)",
    btnDosePh: "Dose pH Down",
    btnDoseEc: "Dose Nutrient",
    logTitle: "Hydroponic Edge Event Log",
    langBtnText: "🇰🇭 ភាសាខ្មែរ",
    alertMode: "System is currently in CLOSED LOOP mode. Switch to MANUAL to override actuators."
  },
  km: {
    title: "ប្រព័ន្ធគ្រប់គ្រងវារីវប្បកម្ម (Hydroponics OS)",
    subtitle: "ការគ្រប់គ្រងជាតិជីច្បាស់លាស់ និងទិន្នន័យឫសដំណាំ",
    simOn: "ការសាកល្បង: បើក",
    simOff: "ការសាកល្បង: បិទ",
    mqttLive: "តភ្ជាប់ផ្ទាល់ (MQTT)",
    cardEc: "កម្រិតជាតិជី (EC)",
    subTds: "កម្រិតរលាយសរុប (TDS)",
    cardPh: "កម្រិតអាស៊ីត-បាស (pH)",
    subPh: "កម្រិតល្អបំផុត: 5.5 - 6.5",
    cardWtemp: "សីតុណ្ហភាពទឹក (ឫស)",
    subWtemp: "គោលដៅ: 18 - 22 °C",
    cardWater: "កម្រិតទឹកក្នុងអាង",
    subWater: "ជម្រៅទឹកអាងផ្គត់ផ្គង់",
    cardAtemp: "សីតុណ្ហភាពបរិយាកាស",
    subHumidity: "សំណើមបរិយាកាស",
    cardLight: "ពន្លឺព្រះអាទិត្យ/អំពូល",
    subLight: "កម្រិតពន្លឺរស្មីសំយោគ",
    chartTitle: "ស្ថេរភាពជាតិជី (EC) និងកម្រិតអាស៊ីត (pH)",
    chartDatasetEC: "កម្រិតជាតិជី EC (mS/cm)",
    chartDatasetPH: "កម្រិត pH ក្នុងទឹក",
    actuatorsTitle: "ការបញ្ជាម៉ូទ័រ និងការបាញ់ជី",
    modeHeader: "របៀបដំណើរការប្រព័ន្ធ",
    modeAutoBtn: "ស្វ័យប្រវត្តិ (Auto)",
    modeManualBtn: "បញ្ជាដោយដៃ (Manual)",
    pumpHeader: "ម៉ូទ័របូមទឹកវិលជុំ (NFT Pump)",
    btnPumpOn: "បើកម៉ូទ័រ",
    btnPumpOff: "បិទម៉ូទ័រ",
    lightHeader: "អំពូលជំនួយពន្លឺ (Grow Lights)",
    btnLightOn: "បើកអំពូល",
    btnLightOff: "បិទអំពូល",
    doseHeader: "ម៉ូទ័របាញ់ថ្នាំ និងជី (កម្រិត 5ml)",
    btnDosePh: "បន្ថយកម្រិត pH",
    btnDoseEc: "បន្ថែមជីបំប៉ន",
    logTitle: "កំណត់ហេតុព្រឹត្តិការណ៍ ESP32",
    langBtnText: "🇬🇧 English",
    alertMode: "ប្រព័ន្ធកំពុងដំណើរការ 'ស្វ័យប្រវត្តិ'។ សូមប្តូរទៅ 'បញ្ជាដោយដៃ' ជាមុនសិន។"
  }
};

let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "km" : "en";
  applyTranslations();
}

function applyTranslations() {
  const t = translations[currentLang];

  document.getElementById("txt-title").innerText = t.title;
  document.getElementById("txt-subtitle").innerText = t.subtitle;
  document.getElementById("langBtn").innerText = t.langBtnText;
  document.getElementById("txt-mqtt-status").innerText = t.mqttLive;

  // Simulator button text
  const isSimActive = simInterval !== null;
  document.getElementById("txt-sim").innerText = isSimActive ? t.simOn : t.simOff;

  // Sensor Cards
  document.getElementById("txt-card-ec").innerText = t.cardEc;
  document.getElementById("txt-sub-tds").innerText = t.subTds;
  document.getElementById("txt-card-ph").innerText = t.cardPh;
  document.getElementById("txt-sub-ph").innerText = t.subPh;
  document.getElementById("txt-card-wtemp").innerText = t.cardWtemp;
  document.getElementById("txt-sub-wtemp").innerText = t.subWtemp;
  document.getElementById("txt-card-water").innerText = t.cardWater;
  document.getElementById("txt-sub-water").innerText = t.subWater;
  document.getElementById("txt-card-atemp").innerText = t.cardAtemp;
  document.getElementById("txt-sub-humidity").innerText = t.subHumidity;
  document.getElementById("txt-card-light").innerText = t.cardLight;
  document.getElementById("txt-sub-light").innerText = t.subLight;

  // Chart Title and Legend Labels
  document.getElementById("txt-chart-title").innerText = t.chartTitle;
  hydroChart.data.datasets[0].label = t.chartDatasetEC;
  hydroChart.data.datasets[1].label = t.chartDatasetPH;
  hydroChart.update();

  // Actuators
  document.getElementById("txt-actuators-title").innerText = t.actuatorsTitle;
  document.getElementById("txt-mode-header").innerText = t.modeHeader;
  document.getElementById("btn-mode-auto").innerText = t.modeAutoBtn;
  document.getElementById("btn-mode-manual").innerText = t.modeManualBtn;
  document.getElementById("txt-pump-header").innerText = t.pumpHeader;
  document.getElementById("btn-pump-on").innerText = t.btnPumpOn;
  document.getElementById("btn-pump-off").innerText = t.btnPumpOff;
  document.getElementById("txt-light-header").innerText = t.lightHeader;
  document.getElementById("btn-light-on").innerText = t.btnLightOn;
  document.getElementById("btn-light-off").innerText = t.btnLightOff;
  document.getElementById("txt-dose-header").innerText = t.doseHeader;
  document.getElementById("btn-dose-ph").innerText = t.btnDosePh;
  document.getElementById("btn-dose-ec").innerText = t.btnDoseEc;
  document.getElementById("txt-log-title").innerText = t.logTitle;
}

// ==========================================
// 2. MQTT TOPICS & CONFIGURATION
// ==========================================
const broker = "wss://broker.hivemq.com:8884/mqtt";
const telemetryTopic   = "hydroponics/telemetry";
const pumpTopic        = "hydroponics/control/pump";
const lightTopic       = "hydroponics/control/light";
const doseTopic        = "hydroponics/control/dose";
const modeControlTopic = "hydroponics/control/mode";

// ==========================================
// 3. DUAL-AXIS CHART SETUP (EC vs pH)
// ==========================================
const ctx = document.getElementById("hydroChart").getContext("2d");
const hydroChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: translations[currentLang].chartDatasetEC,
        data: [],
        borderColor: "#38bdf8",
        backgroundColor: "rgba(56, 189, 248, 0.1)",
        borderWidth: 2,
        fill: true,
        tension: 0.35,
        yAxisID: "yEC"
      },
      {
        label: translations[currentLang].chartDatasetPH,
        data: [],
        borderColor: "#c084fc",
        backgroundColor: "transparent",
        borderWidth: 2,
        tension: 0.35,
        yAxisID: "yPH"
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { color: "#1a2f45" },
        ticks: { color: "#8ca3ba", maxTicksLimit: 6 }
      },
      yEC: {
        type: "linear",
        position: "left",
        suggestedMin: 1.0,
        suggestedMax: 3.0,
        grid: { color: "#1a2f45" },
        ticks: { color: "#38bdf8" }
      },
      yPH: {
        type: "linear",
        position: "right",
        suggestedMin: 4.5,
        suggestedMax: 8.0,
        grid: { drawOnChartArea: false },
        ticks: { color: "#c084fc" }
      }
    },
    plugins: {
      legend: { labels: { color: "#8ca3ba" } }
    }
  }
});

// ==========================================
// 4. MQTT CLIENT SETUP
// ==========================================
const client = mqtt.connect(broker);

client.on("connect", function () {
  logEvent("[MQTT] Connected to Broker (broker.hivemq.com)");
  client.subscribe(telemetryTopic);
  client.subscribe("hydroponics/status/#");
});

client.on("message", function (topic, message) {
  const payloadStr = message.toString();

  if (topic === telemetryTopic) {
    handleIncomingTelemetry(payloadStr);
  }
});

// ==========================================
// 5. TELEMETRY PARSING & UI UPDATE
// ==========================================
function handleIncomingTelemetry(rawJson) {
  try {
    const d = JSON.parse(rawJson);
    const timeNow = new Date().toLocaleTimeString();

    if (d.ec !== undefined) {
      document.getElementById("val-ec").innerText = Number(d.ec).toFixed(2) + " mS/cm";
      document.getElementById("val-tds").innerHTML = `<span id="txt-sub-tds">${translations[currentLang].subTds}</span>: ` + Math.round(d.ec * 500) + " PPM";
      hydroChart.data.datasets[0].data.push(d.ec);
    }

    if (d.ph !== undefined) {
      document.getElementById("val-ph").innerText = Number(d.ph).toFixed(2) + " pH";
      hydroChart.data.datasets[1].data.push(d.ph);
    }

    if (d.water_temp !== undefined) {
      document.getElementById("val-wtemp").innerText = Number(d.water_temp).toFixed(1) + " °C";
    }

    if (d.water_level !== undefined) {
      document.getElementById("val-water").innerText = d.water_level + " %";
    }

    if (d.ambient_temp !== undefined) {
      document.getElementById("val-atemp").innerText = d.ambient_temp + " °C";
    }
    if (d.humidity !== undefined) {
      document.getElementById("val-humidity-num").innerText = d.humidity;
    }

    if (d.light_lux !== undefined) {
      document.getElementById("val-light").innerText = d.light_lux + " Lux";
    }

    if (d.pump !== undefined) updateActuatorUI("pump", d.pump);
    if (d.light !== undefined) updateActuatorUI("light", d.light);

    hydroChart.data.labels.push(timeNow);
    if (hydroChart.data.labels.length > 8) {
      hydroChart.data.labels.shift();
      hydroChart.data.datasets[0].data.shift();
      hydroChart.data.datasets[1].data.shift();
    }
    hydroChart.update();

    logEvent("[RX Telemetry] " + rawJson);
  } catch (err) {
    logEvent("[ERR] Invalid JSON packet received");
  }
}

// ==========================================
// 6. ACTUATION COMMANDS
// ==========================================
let currentMode = "AUTO";

function setMode(mode) {
  currentMode = mode;
  document.getElementById("mode-badge").innerText = mode;

  document.getElementById("btn-mode-auto").classList.toggle("active", mode === "AUTO");
  document.getElementById("btn-mode-manual").classList.toggle("active", mode === "MANUAL");

  client.publish(modeControlTopic, mode);
  logEvent("[TX Mode] Mode changed to: " + mode);
}

function sendActuatorCommand(type, state) {
  if (currentMode === "AUTO") {
    alert(translations[currentLang].alertMode);
    return;
  }

  const topic = type === "pump" ? pumpTopic : lightTopic;
  client.publish(topic, state);
  updateActuatorUI(type, state);
  logEvent(`[TX Actuator] ${type.toUpperCase()}: ${state}`);
}

function triggerDose(chemical) {
  client.publish(doseTopic, JSON.stringify({ dose: chemical, volume_ml: 5 }));
  logEvent(`[TX Dosing] Injected 5ml of ${chemical.toUpperCase()}`);
}

function updateActuatorUI(type, state) {
  const badge = document.getElementById(`${type}-status`);
  if (!badge) return;
  badge.innerText = state;
  badge.className = "status-pill " + (state === "ON" ? "status-on" : "status-off");
}

function logEvent(msg) {
  const terminal = document.getElementById("term-logs");
  terminal.innerText += msg + "\n";
  terminal.scrollTop = terminal.scrollHeight;
}

// ==========================================
// 7. SIMULATION ENGINE
// ==========================================
let simInterval = null;

function toggleSimulator() {
  const btnText = document.getElementById("txt-sim");
  const simBtn = document.getElementById("simBtn");

  if (simInterval) {
    clearInterval(simInterval);
    simInterval = null;
    btnText.innerText = translations[currentLang].simOff;
    simBtn.classList.remove("active");
  } else {
    simInterval = setInterval(() => {
      const fakeEC = +(1.6 + (Math.random() * 0.4 - 0.2)).toFixed(2);
      const fakePH = +(6.0 + (Math.random() * 0.3 - 0.15)).toFixed(2);

      const fakeData = {
        ec: fakeEC,
        ph: fakePH,
        water_temp: +(20.5 + Math.random() * 1.5).toFixed(1),
        water_level: Math.round(80 + Math.random() * 8),
        ambient_temp: +(27.5 + Math.random() * 2).toFixed(1),
        humidity: Math.round(62 + Math.random() * 10),
        light_lux: Math.round(14000 + Math.random() * 2000),
        pump: "ON",
        light: "ON"
      };
      handleIncomingTelemetry(JSON.stringify(fakeData));
    }, 3000);

    btnText.innerText = translations[currentLang].simOn;
    simBtn.classList.add("active");
  }
}