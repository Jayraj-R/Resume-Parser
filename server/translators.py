import docx
import PyPDF2

class Translators:
    def pdf_to_txt(pdf_file):
        pdf_reader = PyPDF2.PdfReader(pdf_file)
        pdf_text = ''
        for page in pdf_reader.pages:
            pdf_text += page.extract_text()
        return pdf_text

    def docx_to_txt(docx_file):
        doc = docx.Document(docx_file)
        docx_text = ''
        for para in doc.paragraphs:
            docx_text += para.text + '\n'
        return docx_text
