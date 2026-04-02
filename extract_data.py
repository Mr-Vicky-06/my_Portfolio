import fitz
import os

print("Extracting text from resume...")
doc_resume = fitz.open("data/Resume_Vignesh.pdf")
text = ""
for page in doc_resume:
    text += page.get_text()

with open("resume_text.txt", "w", encoding="utf-8") as f:
    f.write(text)

print("Extracting images from certificates...")
doc_certs = fitz.open("data/111723201108_Relevant Certificates.pdf")
os.makedirs("public/certificates", exist_ok=True)
for i in range(len(doc_certs)):
    page = doc_certs.load_page(i)
    pix = page.get_pixmap()
    pix.save(f"public/certificates/cert_{i+1}.png")

print("Done")
