<h2>
    <p align="center">Padepokan Tujuh Sembilan Test</p>
</h2>

## Installasi

Buka terminal atau command prompt didalam folder project dan install telebih dahulu package yang dibutuhkan. dengan menjalankan perintah

```
npm install
```

Tunggu sampai proses install package selesai

## Run

Sebelum menjalankan project, buat terlebih dahulu file `.env` pada root folder.

Dan masukan kode berikut pada file `.env`

```
VITE_API="https://reqres.in/api"
VITE_API_GOLD_PRICE="https://gold-price-live.p.rapidapi.com"
VITE_RAPID_KEY=""
VITE_RAPID_HOST="gold-price-live.p.rapidapi.com"
```

untuk `VITE_RAPID_KEY` silahkan daftar terlebih dahulu diwebsite [gold-price-live](https://rapidapi.com/ai-box-ai-box-default/api/gold-price-live/) untuk mendapatkan tokennya

apabila env sudah lengkap, langkan selanjutnya yaitu

Jalankan command berikut didalam terminal/CMD

```
npm run dev
```

Buka browser dan ketikan url berikut [http://127.0.0.1:5173/](http://127.0.0.1:5173/)
