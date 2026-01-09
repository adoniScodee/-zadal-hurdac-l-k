
export type Language = 'TR' | 'EN';

export interface Translations {
  navHome: string;
  navAbout: string;
  navServices: string;
  navGallery: string;
  navContact: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  aboutTitle: string;
  aboutText: string;
  aboutBadge: string;
  servicesTitle: string;
  service1: string;
  service1Desc: string;
  service2: string;
  service2Desc: string;
  service3: string;
  service3Desc: string;
  galleryTitle: string;
  contactTitle: string;
  addressLabel: string;
  phoneLabel: string;
  footerCredit: string;
}

export const translations: Record<Language, Translations> = {
  TR: {
    navHome: "Ana Sayfa",
    navAbout: "Hakkımızda",
    navServices: "Hizmetlerimiz",
    navGallery: "Galeri",
    navContact: "İletişim",
    heroTitle: "Aydın Kuşadası Öz Adalı Hurdacılık",
    heroSubtitle: "Her türlü hurdanız değerinde alınır. Kesim ve söküm işleri itina ile yapılır.",
    heroCTA: "Hemen Teklif Al",
    aboutTitle: "Hakkımızda",
    aboutText: "Deneyimli ekibimizle Aydın Kuşadası ve çevresinde profesyonel hurdacılık hizmeti veriyoruz. Güvenilir, Profesyonel ve Hızlı çözümler sunuyoruz.",
    aboutBadge: "Güvenilir • Profesyonel • Hızlı",
    servicesTitle: "Hizmetlerimiz",
    service1: "Hurda Alımı",
    service1Desc: "Demir, bakır, alüminyum ve tüm metaller değerinde alınır.",
    service2: "Yıkım & Söküm",
    service2Desc: "Fabrika, bina ve tesislerin güvenli yıkım ve söküm işlemleri.",
    service3: "Yerinde Tartım",
    service3Desc: "Hassas tartı cihazlarımızla kapınızda nakit ödeme imkanı.",
    galleryTitle: "Çalışmalarımız",
    contactTitle: "Bize Ulaşın",
    addressLabel: "Adresimiz",
    phoneLabel: "Telefon Numaramız",
    footerCredit: "Drakos Software ile tasarlanmıştır"
  },
  EN: {
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navGallery: "Gallery",
    navContact: "Contact",
    heroTitle: "Aydın Kuşadası Öz Adalı Scrap Metal",
    heroSubtitle: "All types of scrap are bought at value. Cutting and dismantling works are done with care.",
    heroCTA: "Get Quote Now",
    aboutTitle: "About Us",
    aboutText: "With our experienced team, we provide professional scrap metal services in Aydın Kuşadası and surroundings. We offer Reliable, Professional, and Fast solutions.",
    aboutBadge: "Reliable • Professional • Fast",
    servicesTitle: "Our Services",
    service1: "Scrap Buying",
    service1Desc: "Iron, copper, aluminum and all metals are bought at fair value.",
    service2: "Demolition",
    service2Desc: "Safe demolition and dismantling of factories and buildings.",
    service3: "On-site Weighing",
    service3Desc: "Cash payment at your door with precise weighing equipment.",
    galleryTitle: "Our Work",
    contactTitle: "Contact Us",
    addressLabel: "Address",
    phoneLabel: "Phone Number",
    footerCredit: "Designed by Drakos Software"
  }
};
