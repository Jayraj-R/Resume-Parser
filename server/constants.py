class RegexConstants:
    EMAIL_REGEX = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b'
    PHONE_REGEX = r'(?:(?:\+?\d{1,2}\s?)?(?:\d{10}|\d{3}\s\d{3}\s\d{4}|\d{2}\s\d{2}\s\d{2}\s\d{2}|\d{1}\s\d{2}\s\d{2}\s\d{2}|\d{11}|\d{1,2}\s\d{10}|(?:\d{3}-\d{3}-\d{4})))'


class FileConstants:
    PDF_EXTENSION = '.pdf'
    DOCX_EXTENSION = '.docx'
    TXT_EXTENSION = '.txt'
    UTF_8 = 'utf-8'

class ResponseConstants:
    FIRST_NAME = 'first_name'
    LAST_NAME = 'last_name'
    EMAIL = 'email'
    PHONE = 'phone'