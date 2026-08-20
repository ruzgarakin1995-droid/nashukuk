export interface CaseStudy {
  slug: string;
  category: string;
  year: string;
  title: string;
  summary: string;
  clientSector: string;
  duration: string;
  valueOrImpact: string;
  heroImage: string;
  leadAttorney: {
    name: string;
    role: string;
    image: string;
  };
  metrics: { value: string; label: string }[];
  challenge: {
    title: string;
    description: string;
    keyIssues: string[];
  };
  strategy: {
    title: string;
    description: string;
    steps: string[];
  };
  outcome: {
    title: string;
    description: string;
    achievements: string[];
  };
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
}

export const caseStudiesData: Record<string, CaseStudy> = {
  "uluslararasi-sirket-birlesmesi": {
    slug: "uluslararasi-sirket-birlesmesi",
    category: "Ticaret & M&A",
    year: "2024",
    title: "Uluslararası Şirket Birleşmesi ve Sözleşme Mimarisi",
    summary: "İki büyük teknoloji ve lojistik firmasının hukuki altyapısının birleştirilmesi, Rekabet Kurumu izinleri ve hisse devir sözleşmeleri başarıyla tamamlandı.",
    clientSector: "Teknoloji & E-Ticaret",
    duration: "6 Ay",
    valueOrImpact: "₺120.000.000 Şirket Değeri",
    heroImage: "/law/case_birlesme.jpg",
    leadAttorney: {
      name: "Av. Süleyman UĞUR",
      role: "Kurucu Avukat / NAS Hukuk",
      image: "/law/attorney_robert.jpg"
    },
    metrics: [
      { value: "₺120M", label: "M&A Hacmi" },
      { value: "32", label: "Tamamlanan Sözleşme" },
      { value: "%100", label: "Uyum Başarısı" }
    ],
    challenge: {
      title: "Çok Uluslu Hissedar Yapısı ve Rekabet Riskleri",
      description: "Farklı ülkelerdeki ortaklık paylarının devri, fikri mülkiyet haklarının transferi ve regülasyon izinleri aşamasındaki karmaşık hukuki riskler yönetildi.",
      keyIssues: [
        "Fikri ve sınai mülkiyet haklarının devir protokolleri",
        "Rekabet Kurumu bildirim ve onay aşamaları",
        "Çapraz vergi ve sermaye transferi riskleri"
      ]
    },
    strategy: {
      title: "Kapsamlı Hukuki İnceleme (Due Diligence) ve Strateji",
      description: "Avukat Süleyman UĞUR liderliğinde tüm şirket sözleşmeleri, iş davaları ve mali tablolar taranarak sıfır riskli birleşme protokolü hazırlandı.",
      steps: [
        "Detaylı Due Diligence raporunun hazırlanması",
        "Hissedarlar Anlaşması (SHA) ve SPA sözleşmelerinin tanzimi",
        "Bakanlık ve Rekabet Kurumu izin başvurularının takibi"
      ]
    },
    outcome: {
      title: "Sorunsuz Kapanış ve Tam Hukuki Koruma",
      description: "Birleşme süreci hedeflenen takvimde eksiksiz tamamlanarak yeni kurumsal yapı faaliyete geçirildi.",
      achievements: [
        "Tüm resmi izinler tek seferde onaylandı",
        "Olası hissedar uyuşmazlıklarına karşı koruyucu mekanizma kuruldu"
      ]
    },
    testimonial: {
      quote: "Avukat Süleyman UĞUR ve NAS Hukuk ekibinin titiz yaklaşımı sayesinde şirket birleşmemizi sıfır pürüzle tamamladık.",
      author: "Murat T.",
      title: "Yönetim Kurulu Başkanı"
    }
  },
  "toplu-is-sozlesmesi-ihtilafi": {
    slug: "toplu-is-sozlesmesi-ihtilafi",
    category: "İş Hukuku",
    year: "2024",
    title: "Geniş Çaplı Toplu İş Uyuşmazlığının Çözümü",
    summary: "Sendika ile sanayi kuruluşu müvekkilimiz arasında yaşanan yüksek tazminat riskli uyuşmazlık, etkin arabuluculukla lehe sonuçlandırıldı.",
    clientSector: "Üretim & Sanayi",
    duration: "3 Ay",
    valueOrImpact: "₺45.000.000 Risk Tasarrufu",
    heroImage: "/law/case_sendika.jpg",
    leadAttorney: {
      name: "Av. Süleyman UĞUR",
      role: "Kurucu Avukat / NAS Hukuk",
      image: "/law/attorney_robert.jpg"
    },
    metrics: [
      { value: "450+", label: "Kapsanan Çalışan" },
      { value: "₺45M", label: "Tasarruf Sağlanan Risk" },
      { value: "12 Hafta", label: "Çözüm Süresi" }
    ],
    challenge: {
      title: "Grev Riski ve Yüksek Tazminat Talepleri",
      description: "Toplu iş sözleşmesi görüşmelerindeki tıkanıklık sonucu fabrikanın durma tehlikesi ve yüksek maliyetli dava riski bulunmaktaydı.",
      keyIssues: [
        "Sendika taleplerinin bütçe dengesini bozması",
        "Geçmiş dönem fazla mesai ve prim iddiaları"
      ]
    },
    strategy: {
      title: "Müzakere Masası ve Aktüeryal Savunma",
      description: "Tüm çalışma kayıtları bilirkişi standartlarında hesaplanarak hukuki ve rasyonel bir anlaşma zemini oluşturuldu.",
      steps: [
        "Geçmiş 5 yıllık bordro ve vardiya dökümlerinin incelenmesi",
        "Sendika heyetiyle birebir müzakerelerin yürütülmesi"
      ]
    },
    outcome: {
      title: "Üretim Kesintisi Olmadan Adil Uzlaşma",
      description: "Her iki tarafı da tatmin eden 3 yıllık toplu iş sözleşmesi imzalandı ve tüm dava riskleri bertaraf edildi.",
      achievements: [
        "Üretim durdurulmadan kriz çözüldü",
        "İş barışı ve kurumsal istikrar sağlandı"
      ]
    }
  },
  "karmasik-tapu-iptal-davasi": {
    slug: "karmasik-tapu-iptal-davasi",
    category: "Gayrimenkul Hukuku",
    year: "2023",
    title: "Yüksek Değerli Taşınmazda Tapu İptal ve Tescil Başarısı",
    summary: "Miras kaynaklı muvazaa sebebiyle üçüncü şahıslara devredilen değerli ticari mülkün tapusu, Yargıtay aşamasında müvekkilimiz lehine tescil edildi.",
    clientSector: "Gayrimenkul & Yatırım",
    duration: "18 Ay",
    valueOrImpact: "₺85.000.000 Emsal Karar",
    heroImage: "/law/case_tapu.jpg",
    leadAttorney: {
      name: "Av. Süleyman UĞUR",
      role: "Kurucu Avukat / NAS Hukuk",
      image: "/law/attorney_robert.jpg"
    },
    metrics: [
      { value: "₺85M", label: "Gayrimenkul Değeri" },
      { value: "Yargıtay", label: "Onanan Emsal Karar" },
      { value: "%100", label: "Hak İadesi" }
    ],
    challenge: {
      title: "Miras Kaçırma (Muris Muvazaası) ve Zincirleme Devirler",
      description: "Taşınmazın kötü niyetli üçüncü kişilere aktarılması sonucu mülkiyetin tespiti oldukça güçleşmişti.",
      keyIssues: [
        "Zincirleme satış işlemlerinin muvazaalı olduğunun ispatı",
        "Taşınmaz üzerine ivedilikle ihtiyati tedbir konulması gerekliliği"
      ]
    },
    strategy: {
      title: "Banka Kayıtları ve Tanık Beyanlarıyla İspat Zinciri",
      description: "Avukat Süleyman UĞUR, para transferlerinin gerçek dışı olduğunu kanıtlayan mali incelemelerle davayı kurguladı.",
      steps: [
        "24 saat içinde tapu kütüğüne ihtiyati tedbir şerhi konulması",
        "Geçmiş 20 yıllık banka hareketlerinin mahkeme kanalıyla celbi"
      ]
    },
    outcome: {
      title: "Tapu İptali ve Müvekkil Adına Kesin Tescil",
      description: "Mahkeme haksız devirleri iptal ederek taşınmazın müvekkilimiz adına tesciline karar verdi.",
      achievements: [
        "Müvekkilin tüm miras payı eksiksiz korundu",
        "Emsal nitelikte Yargıtay onama kararı alındı"
      ]
    }
  }
};
