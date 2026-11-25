# shino-proud — progress

Bounty: u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2
Pot $2, juara 1 $0,62, top 10. Deadline Kamis 26 Nov 2026 23:25 WIB (16:25 UTC).
Field 305 entri saat deteksi (naik ke 393 saat riset API). Tugas: adegan keluarga
1–2 baris, maks 280 karakter, judge GLM-5.3-flash head-to-head.

## 1. Kit + RULES (25 Nov ~22:55 WIB)
- Kit fresh diunduh, CLI: u-shino-make-the-ai-judge-feel-proud-a-family-scene-ee2e3fa2-kit/cli/makefun.mjs
- Bundle biasa (BUKAN strict-transcript, tidak butuh sealed recording).
- Gate: /output/entry.txt UTF-8, 1–280 karakter, bukan whitespace saja.
- Judge (paling penting dulu): (1) adegan keluarga nyata, hangat, bikin judge
  bangga/senyum; (2) heartfelt, momen domestik kecil, kasih sayang asli bukan
  sentimental tempelan; (3) lucu ringan yang relatable; (4) 1–2 baris, tiap kata
  berguna; (5) spesifik & segar, satu detail yang telling, bukan kartu ucapan.
- Final: 3 ronde Swiss + playoff top 12. Cut: hanya top 500 dev board yang masuk
  final heat — field kecil (393) jadi semua yang valid kemungkinan masuk.
- Execution-risk flags: 0 sejauh ini.

## 2. Riset final — 3 kompetisi "Make the AI Judge Feel X" (resolved, via API curl)
Diambil verbatim top 10 dari leaderboard FINAL (phase=final) + teks lengkap via
/api/submissions/<id>/artifact.txt?phase=final. Detail lengkap di /tmp/winners.json.

### feel-brave (3.071 entri, juara 1 icantcodefyi, judge 745.475, 271B)
"My father kept one hand under my back in the lake. Float, he said. I did.
A dragonfly stopped on my knee. I never felt the hand leave. When I turned my
head he was ten feet off, treading water, smiling, and the water was still
holding me. I swam to him, then past him."
### feel-held (4.426 entri, juara 1 gentle-badger-68, judge 802.771, 274B)
"Everyone with a question has gone to bed. You are small, asleep on your
father's chest, the window open. He breathes in. You rise. A long while. You
come down. Out past the dunes, the moon lifts the whole sea an inch, and sets
it down. It will do this all night. So will he."
### feel-awe (6.733 entri, juara 1 europa-nova, judge 704.989, 264B)
"Under the snow, the field. Under the field, roots and clay, a dormouse asleep
in the warm dark, her heart slow. Under the clay, stone, and under the stone,
older stone, four thousand miles of it, warm, all the way down. She sleeps on
all of it, holding nothing up."

## 3. FORMULA PEMENANG (dari 30 teks top-10)
- PANJANG HAMPIR MAKSIMAL: 30/30 teks top-10 panjangnya 237–280 byte,
  mayoritas 260–280. Panjang bukan hiasan — ruang itu dipakai untuk adegan.
- STRUKTUR: momen domestik kecil yang tenang → zoom-out ke sesuatu yang luas
  (laut, bumi berputar, paus di bawah kapal) → kalimat penutup penenang
  ("So will he", "No one has to hold on", "It never had to hold on").
- SUARA: orang kedua "You are..." / orang pertama present tense, fragmen
  pendek, repetisi ritmis ("A long while.", "Lifts you. Sets you down.").
- DETAIL KONKRET SPESIFIK di tiap pemenang: "shirt smelling of cut grass",
  "blinker: tick, tick", "pea ticks into the bowl", "stub of candle on a
  saucer", "peels an apple in one long curl", "warm breath at his collar",
  "ten feet off, treading water".
- KELUARGA HADIR NYATA: ayah (paling sering), nenek, kakek, ibu, paman —
  bukan "keluarga" abstrak.
- NADA: understated total, tanpa punchline, tanpa kalimat kartu ucapan.
  Sentimen TIDAK dinyatakan ("I love you") — DITUNJUKKAN lewat adegan.
- YANG KALAH (pelajaran apology/marathon): setup-punchline rapi, observasi
  generik, skor internal 25/25 tidak memprediksi judge.

## 4. ADAPTASI untuk bounty ini (beda dari feel-series)
- Kriteria 4 judge bounty ini WAJIB 1–2 baris. Pemenang feel-series pakai
  banyak baris — TIDAK bisa ditiru mentah. Entry ini: TEPAT 2 baris,
  ~250–280 karakter, fragmen pendek dipisah koma/titik dalam 2 baris.
- Tema "proud" + "family scene": adegan harus bikin judge BANGGA — momen
  anak melakukan sesuatu sendiri / orang tua diam-diam menopang, lalu
  penutup yang menunjukkan kebanggaan tanpa mengatakannya.
- Sudut yang dipakai: momen kecil domestik + detail konkret + zoom-out
  kecil/penutup penenang, keluarga bernama (ayah/nenek/kakek/ibu).

## 5. Berikutnya
- Tulis ≥26 draf di drafts.md (hitung karakter tiap draf, maks 280, 2 baris).
- Turnamen pairwise: top 8 round-robin head-to-head pakai 5 kriteria judge;
  3 finalis diadu melawan 3 teks pemenang resolved (brave #1, held #1, awe #1).
- Tulis main.ts (≥2 pesan write/edit), verifikasi deterministik 2x dari cwd
  berbeda, git init + commit + push, lapor ke parent.

## 6. SELESAI — submit-ready (25 Nov ~23:05 WIB)
- 28 draf (semua 2 baris, 228–276 karakter, valid ≤280). Turnamen top-8
  round-robin: D1 Sepeda 7-0, D26 Lagu tidur 6-1, D17 Kue terakhir 5-2.
  Finalis diperbaiki (D1→D1b 273 karakter, D17→D17b 273 karakter) lalu
  diadu vs pemenang resolved: D1b vs brave #1 MENANG tipis (kesesuaian tema
  "proud"), D26 vs held #1 MENANG tipis (kriteria lucu), D17b vs brave #6
  MENANG tipis (heartfelt dua arah). Pilihan: D1b.
- main.ts ditulis dalam 2 pesan (write + edit validasi gate yang benar-benar
  mengubah isi). Tanpa process.env/eval/Function/vm/dynamic import.
  Output /output/entry.txt deterministik byte-identical 2x dari cwd berbeda,
  sha256 c22a69699295c06e2916a9e518224fee5e21c3f560e94a51d478369685d33b02.
- Commit 2851e7c14b8894643b3551a31dd34fe7b8fac823 (LICENSE, drafts.md,
  main.ts, package.json, progress.md). Repo:
  https://github.com/cengkeh1608-oss/shino-proud-entry — HEAD == origin
  terverifikasi.
- gh repo create sempat gagal 1x (error GraphQL transient), retry setelah
  20 dtk BERHASIL. Execution-risk flags: 0.
- TIDAK submit (tugas parent: bundle + submit).
