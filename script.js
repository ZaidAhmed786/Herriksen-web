   function openSealPopup() {
      window.open(
        'https://www.rapidscansecure.com/siteseal/Verify.aspx?code=17,3C133811720FCCB163552D13CC00BA650A6AFA5B',
       
      );
    }
     const fileInput = document.getElementById("fileInput");
  const previewArea = document.getElementById("previewArea");

  fileInput.addEventListener("change", function () {
    previewArea.innerHTML = ""; // Clear previous preview

    for (let file of fileInput.files) {
      const fileType = file.type;
      const fileDiv = document.createElement("div");
      fileDiv.style.marginBottom = "10px";

      // agar image file hai to preview dikhao
      if (fileType.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.style.maxWidth = "200px";
        img.style.height = "auto";
        img.style.border = "1px solid #ccc";
        img.style.borderRadius = "5px";
        img.style.margin = "5px";
        fileDiv.appendChild(img);
      } 
      // warna file ka naam dikhao
      else {
        const p = document.createElement("p");
        p.textContent = "📄 " + file.name;
        fileDiv.appendChild(p);
      }

      previewArea.appendChild(fileDiv);
    }
  });