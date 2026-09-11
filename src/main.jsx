import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const bazaarUrl = 'https://cafebazaar.ir/app/ir.bnzapp';

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="BNZ - صفحه اصلی">
      <img src="/brand-mark.svg" alt="" width="34" height="34" />
      <span className="brand-word">BNZ</span>
      <span className="brand-sub">بنزین</span>
    </a>
  );
}

function FuelCard({ label, value, meta, tone = 'green' }) {
  return (
    <div className={`fuel-card fuel-card--${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{meta}</small>
    </div>
  );
}

function PhonePreview() {
  return (
    <div className="phone-scene" aria-label="پیش‌نمایش رابط BNZ">
      <div className="orbit orbit-a" aria-hidden="true" />
      <div className="orbit orbit-b" aria-hidden="true" />
      <div className="phone">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <div className="app-topline">
            <div>
              <span className="eyebrow">خودروی فعال</span>
              <strong>پژو ۲۰۶</strong>
            </div>
            <img src="/brand-mark.svg" alt="" width="30" height="30" />
          </div>

          <section className="metric-card">
            <span>مصرف واقعی</span>
            <div className="metric-line"><strong>۷٫۶</strong><small>لیتر / ۱۰۰ کیلومتر</small></div>
            <div className="metric-track"><i /></div>
            <p>براساس آخرین سوخت‌گیری‌های ثبت‌شده</p>
          </section>

          <div className="fuel-grid">
            <FuelCard label="مانده سهمیه" value="۴۲ لیتر" meta="کارت شخصی" />
            <FuelCard label="هزینه این ماه" value="۳۸۴ هزار" meta="برآورد فعلی" tone="saffron" />
          </div>

          <section className="quick-log">
            <div>
              <span className="eyebrow">ثبت سریع</span>
              <strong>امروز سوخت زدی؟</strong>
            </div>
            <button type="button" tabIndex="-1">ثبت سوخت‌گیری</button>
          </section>

          <div className="app-nav" aria-hidden="true">
            <b>خانه</b><span>سوخت‌گیری</span><span>آمار</span>
          </div>
        </div>
      </div>
      <div className="floating-note note-one"><b>۲ خودرو</b><span>جدا، دقیق</span></div>
      <div className="floating-note note-two"><b>۳ کارت</b><span>مانده مستقل</span></div>
    </div>
  );
}

function Feature({ index, title, children, className = '' }) {
  return (
    <article className={`feature ${className}`}>
      <span className="feature-index">{index}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

function App() {
  return (
    <main id="top">
      <header className="site-header shell">
        <Brand />
        <nav aria-label="ناوبری اصلی">
          <a href="#features">امکانات</a>
          <a href="#privacy">حریم خصوصی</a>
          <a className="nav-cta" href={bazaarUrl} target="_blank" rel="noreferrer">صفحه در بازار</a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="status-pill"><i /> نسخه ۱.۱ · آفلاین و بدون حساب</div>
          <h1>بنزین را<br/><em>حدس نزن.</em></h1>
          <p className="hero-lead">مصرف واقعی خودرو، مانده‌ی تخمینی کارت سوخت و هزینه‌ی مسیر بعدی را یک‌جا نگه دار. بدون ثبت‌نام، بدون تبلیغ، بدون اینترنت.</p>
          <div className="hero-actions">
            <a className="button button-primary" href={bazaarUrl} target="_blank" rel="noreferrer">مشاهده در کافه‌بازار</a>
            <a className="button button-ghost" href="#features">ببین چه کار می‌کند</a>
          </div>
          <div className="micro-proof">
            <span>داده‌ها روی گوشی</span><i />
            <span>چند خودرو و چند کارت</span><i />
            <span>RTL واقعی</span>
          </div>
        </div>
        <PhonePreview />
      </section>

      <section className="statement shell" aria-label="معرفی BNZ">
        <p>کارت سوخت یک عدد نیست.</p>
        <h2>یک سابقه است: خودرو، کارت، سهمیه، نرخ، مسافت و چیزی که واقعاً مصرف کرده‌ای.</h2>
      </section>

      <section id="features" className="features shell">
        <div className="section-kicker">برای زندگی واقعی با چند ماشین و چند کارت</div>
        <div className="feature-grid">
          <Feature index="01" title="هر خودرو، سابقه خودش" className="feature-wide">
            مصرف و سوخت‌گیری خودروها با هم قاطی نمی‌شود. خودروی فعال را انتخاب کن و تاریخچه‌اش را جدا ببین.
          </Feature>
          <Feature index="02" title="هر کارت، مانده خودش" className="feature-tall">
            کارت سواری، موتور، وانت، تاکسی یا هر نوع دیگری را جدا نگه دار و مانده را دستی با واقعیت کارت تطبیق بده.
          </Feature>
          <Feature index="03" title="ثبت سریع، عدد کمتر">
            مقدارهای پیشنهادی، نرخ‌های قابل‌تغییر و پیشنهاد تقسیم بین سهمیه‌ها یعنی هر بار لازم نیست همه‌چیز را از صفر تایپ کنی.
          </Feature>
          <Feature index="04" title="باک کامل شد؟" className="feature-accent">
            وقتی مقدار سوخت با ظرفیت باک هم‌خوان باشد، BNZ فقط پیشنهاد می‌دهد «باک کامل شد» را تأیید کنی؛ خودش چیزی را فرض نمی‌کند.
          </Feature>
          <Feature index="05" title="قبل از سفر، عدد داشته باش" className="feature-wide feature-dark">
            هزینه‌ی سفر و ادامه‌ی ماه را با مصرف واقعی یا مقدار فرضی شفاف برآورد کن. وقتی داده کافی نباشد، صفر جعلی نمی‌بینی.
          </Feature>
        </div>
      </section>

      <section className="workflow shell">
        <div className="workflow-copy">
          <span className="section-kicker">کمتر تایپ کن، بیشتر بدان</span>
          <h2>ثبت سوخت‌گیری باید از خود سوخت‌گیری کوتاه‌تر باشد.</h2>
          <p>خودرو و کارت انتخاب‌شده حفظ می‌شوند. دفعه بعد فقط مقدار، نرخ و کیلومتر را چک می‌کنی و تمام.</p>
        </div>
        <ol className="steps">
          <li><span>۱</span><div><b>خودرو و کارت</b><p>انتخاب قبلی از قبل آماده است.</p></div></li>
          <li><span>۲</span><div><b>مقدار و نرخ</b><p>از پیشنهادها بزن یا عدد را عوض کن.</p></div></li>
          <li><span>۳</span><div><b>ثبت و ادامه</b><p>مصرف، سهمیه و هزینه دوباره محاسبه می‌شود.</p></div></li>
        </ol>
      </section>

      <section id="privacy" className="privacy shell">
        <div className="privacy-mark"><img src="/brand-mark.svg" alt="" width="76" height="76" /></div>
        <div>
          <span className="section-kicker">Offline-first از روز اول</span>
          <h2>اطلاعات رفت‌وآمدت لازم نیست جایی ارسال شود.</h2>
          <p>نسخه فعلی BNZ حساب کاربری، backend، تبلیغ، analytics و حتی Internet permission ندارد. داده‌های سوخت‌گیری روی دستگاه خودت می‌مانند.</p>
        </div>
      </section>

      <section className="disclaimer shell">
        <b>یک نکته مهم درباره سهمیه</b>
        <p>مانده‌ی نمایش‌داده‌شده تخمینی است و استعلام رسمی کارت سوخت نیست. BNZ نرخ یا سهمیه‌ی خبری را به‌عنوان واقعیت قطعی به داده‌های تو تحمیل نمی‌کند.</p>
      </section>

      <section className="final-cta shell">
        <div>
          <span className="section-kicker">BNZ برای Android</span>
          <h2>سوخت‌گیری بعدی را ثبت کن.<br/>بقیه‌اش را به حافظه نسپار.</h2>
        </div>
        <a className="button button-invert" href={bazaarUrl} target="_blank" rel="noreferrer">رفتن به کافه‌بازار</a>
      </section>

      <footer className="footer shell">
        <Brand />
        <p>ابزار شخصی ثبت مصرف و هزینه سوخت · bnzapp.ir</p>
        <span>© ۲۰۲۶ BNZ</span>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
