# تعديلات البورتيفوليو

## طريقة التطبيق
1. فك الضغط **فوق جذر الريبو** (بيستبدل الملفات الموجودة بنفس المسارات وبيضيف الجديدة).
2. احذف هالملفات من الريبو:
   ```bash
   git rm src/components/sections/FeedbackSection.jsx src/services/feedbackService.js code_artifact.md
   ```
3. شغّل `npm run dev` وجرّب (EN وAR)، ثم `npm run build`.
4. `git add -A && git commit -m "Update portfolio content, SEO and RTL fixes" && git push` (Vercel بينشر تلقائياً).

## شو تغيّر
- **السيرة:** `public/cv/aliehammadi-resume.pdf` هو السيرة الجديدة (بيستبدل القديم).
- **التدريس:** صار مسماه "Flutter Course Instructor" ووصفه دورة واحدة للطلاب (بدل خبرة تدريب مستمرة)، بتاريخ أيلول – تشرين الثاني 2024، وعُدّلت جملة About.
- **المحتوى:** المسمى "Flutter Developer"، نص Hero وAbout صادق ومطابق للسيرة، سطر التوفر، أوصاف المشاريع (الكروت والنافذة) مطابقة لدراسات الحالة، التعليم موحّد، رابط LinkedIn نظيف، إملاء Tfouki.
- **النافذة:** وسوم مأخوذة من البيانات، حقل `links` يظهر فقط إذا فيه رابط، إغلاق بـ Escape، و`role="dialog"`.
- **العربية (RTL):** التواريخ مترجمة، و`border-s-2`/`ps-4`/`text-start` بدل اليسار الثابت.
- **الثقة:** حذف قسم الفيدباك والشهادات (والمفاتيح والخدمة المرتبطة)، وحذف رقم الهاتف النصي من قسم التواصل.
- **SEO:** `index.html` (عنوان، وصف، canonical، Open Graph، JSON-LD)، و`robots.txt` و`sitemap.xml`، و`README.md`.

## لسا ناقص (بحتاج منك)
- [ ] **صورة المشاركة:** تأكد أن الملف اسمه `public/images/og-cover.png` وقياسه 1200×630 (المسار مذكور بـ `index.html`).
- [ ] **روابط المشاريع:** Tfouki خاص (بدون رابط)، وTelmi أضف رابط المتجر بـ `links.store` عند النشر.
- [ ] **اختياري:** غيّر اسم الريبو إلى `portfolio`، وأضف وصفاً وtopics.

`changes.diff` فيه كل الفروقات للمراجعة.
