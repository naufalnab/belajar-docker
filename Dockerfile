# 1. Gunakan base image Odoo 17 resmi
FROM odoo:17.0

# 2. Ganti ke user root agar bisa install library
USER root

# 3. Install library python tambahan (pandas, dll)
# Tips: Jika butuh banyak, bisa pakai COPY requirements.txt dan RUN pip install -r requirements.txt
RUN pip3 install pandas openpyxl

# 4. Kembalikan ke user odoo demi keamanan
USER odoo