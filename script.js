function updateAgencyName() {
  const input = document.getElementById('agencyInput').value;
  document.getElementById('agencyName').textContent = input;
}

function generatePreview() {
  const preview = document.getElementById('previewArea');
  preview.innerHTML = '';

  // โลโก้
  const logoFile = document.getElementById('logoUpload').files[0];
  if (logoFile) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const logoImg = document.createElement('img');
      logoImg.src = e.target.result;
      logoImg.style.height = '80px';
      logoImg.style.float = 'left';
      logoImg.style.marginRight = '20px';
      preview.appendChild(logoImg);
    };
    reader.readAsDataURL(logoFile);
  }

  // ชื่อหน่วยงาน
  const agencyName = document.getElementById('agencyInput').value;
  const agencyDiv = document.createElement('div');
  agencyDiv.textContent = agencyName;
  agencyDiv.style.fontSize = '2em';
  agencyDiv.style.fontWeight = 'bold';
  agencyDiv.style.marginBottom = '10px';
  preview.appendChild(agencyDiv);

  // ตั้งค่าฟอนต์และสี
  const font = document.getElementById('fontSelect').value;
  const textColor = document.getElementById('textColor').value;
  const headlineBg = document.getElementById('headlineBg').value;
  preview.style.fontFamily = font;
  preview.style.color = textColor;

  // หัวเรื่อง
  const headline = document.getElementById('headline').value;
  const headlineDiv = document.createElement('div');
  headlineDiv.textContent = headline;
  headlineDiv.style.backgroundColor = headlineBg;
  headlineDiv.style.padding = '10px';
  headlineDiv.style.fontSize = '1.5em';
  headlineDiv.style.marginBottom = '10px';
  preview.appendChild(headlineDiv);

  // เนื้อหา
  const content = document.getElementById('mainContent').value;
  const contentDiv = document.createElement('div');
  contentDiv.textContent = content;
  contentDiv.style.marginTop = '10px';
  preview.appendChild(contentDiv);

  // ภาพประกอบ
  const imageFiles = document.getElementById('imageUpload').files;
  for (let i = 0; i < Math.min(imageFiles.length, 5); i++) {
    const imgReader = new FileReader();
    imgReader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.width = '200px';
      img.style.margin = '10px';
      preview.appendChild(img);
    };
    imgReader.readAsDataURL(imageFiles[i]);
  }
}

function downloadAsImage() {
  html2canvas(document.getElementById('previewArea')).then(canvas => {
    const link = document.createElement('a');
    link.download = 'preview.jpg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
  });
}
