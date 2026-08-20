export interface Article {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  heroImage: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
    callout?: {
      title: string;
      text: string;
    };
    points?: string[];
  }[];
  keyTakeaways: string[];
  tags: string[];
  tableOfContents: string[];
}

export const articlesData: Record<string, Article> = {
  "yeni-is-kanunu-duzenlemeleri": {
    slug: "yeni-is-kanunu-duzenlemeleri",
    category: "İş Hukuku",
    date: "12 Ekim 2024",
    readTime: "6 Dk Okuma",
    title: "Yeni İş Kanunu Düzenlemeleri Neleri Kapsıyor?",
    author: {
      name: "Av. Süleyman UĞUR",
      role: "Kurucu Avukat / NAS Hukuk",
      image: "/law/attorney_robert.jpg"
    },
    heroImage: "/law/article_is_kanunu.jpg",
    summary: "Son mevzuat düzenlemeleri ile birlikte işçi ve işveren haklarında yapılan önemli değişikliklerin, kıdem tazminatı tavanı ve uzaktan çalışma protokollerinin detaylı hukuki analizi.",
    sections: [
      {
        heading: "1. İş Kanunundaki Temel Değişikliklerin Kapsamı",
        content: [
          "İş hukuku mevzuatında yapılan son düzenlemeler, değişen çalışma modellerini ve dijitalleşen iş dünyasını yasal güvence altına almayı hedeflemektedir.",
          "Özellikle esnek ve uzaktan çalışma modellerinde işverenin gözetme borcu, mesai saatlerinin tespiti ve veri güvenliği ön plana çıkmaktadır."
        ],
        callout: {
          title: "Hukuki Uyarı",
          text: "İşverenlerin mevcut iş sözleşmelerini yeni mevzuata uyumlu hale getirmesi, olası kıdem ve fazla mesai davalarında kritik önem taşır."
        }
      },
      {
        heading: "2. Kıdem Tazminatı ve İşe İade Kriterleri",
        content: [
          "Arabuluculuk sürecinin zorunlu dava şartı olarak uygulanmasındaki yeni pratikler, işe iade davalarında 1 aylık hak düşürücü sürenin titizlikle takip edilmesini gerektirmektedir."
        ],
        points: [
          "Fesih bildiriminin yazılı ve gerekçeli yapılması zorunluluğu",
          "Savunma alınmadan yapılan fesihlerin geçersizliği",
          "Boşta geçen süre tazminatındaki güncel Yargıtay içtihatları"
        ]
      }
    ],
    keyTakeaways: [
      "İş sözleşmeleri yeni çalışma modellerine göre ivedilikle güncellenmelidir.",
      "Arabuluculuk görüşmelerinde uzman avukat refakati hak kaybını önler.",
      "Tüm fesih süreçleri yazılı delillerle belgelendirilmelidir."
    ],
    tags: ["İş Hukuku", "Kıdem Tazminatı", "İşe İade", "Avukat Süleyman UĞUR"],
    tableOfContents: [
      "1. Temel Değişikliklerin Kapsamı",
      "2. Kıdem Tazminatı ve İşe İade",
      "3. Sonuç ve Hukuki Tavsiyeler"
    ]
  },
  "kisisel-verilerin-korunmasinda-yeni-donem": {
    slug: "kisisel-verilerin-korunmasinda-yeni-donem",
    category: "Bilişim & KVKK",
    date: "05 Ekim 2024",
    readTime: "5 Dk Okuma",
    title: "Kişisel Verilerin Korunmasında Yeni Dönem ve Şirket Yükümlülükleri",
    author: {
      name: "Av. Süleyman UĞUR",
      role: "Kurucu Avukat / NAS Hukuk",
      image: "/law/attorney_robert.jpg"
    },
    heroImage: "/law/article_kvkk.jpg",
    summary: "KVKK Kurul kararları ve AB GDPR uyum süreci ışığında şirketlerin alması gereken yeni idari ve teknik tedbirlerin analizi.",
    sections: [
      {
        heading: "1. Yurtdışına Veri Aktarımındaki Yeni Kurallar",
        content: [
          "6698 Sayılı Kanun'da yapılan değişiklikler ile birlikte bulut bilişim ve sınır ötesi veri transferlerinde standart sözleşmeler ve taahhütname zorunlulukları getirilmiştir."
        ],
        callout: {
          title: "İdari Para Cezası Riski",
          text: "Uyumsuz veri aktarımlarında Kurul tarafından uygulanan yüksek para cezalarına karşı şirketlerin veri envanterini acilen revize etmesi şarttır."
        }
      }
    ],
    keyTakeaways: [
      "Veri saklama ve imha politikaları güncellenmelidir.",
      "Yurtdışı sunucu kullanan sistemler için standart sözleşme tanzim edilmelidir."
    ],
    tags: ["KVKK", "Veri Güvenliği", "Şirketler Hukuku", "NAS Hukuk"],
    tableOfContents: [
      "1. Yurtdışına Veri Aktarımı",
      "2. İdari ve Teknik Tedbirler"
    ]
  },
  "kira-tespit-davalarinda-dikkat-edilmesi-gerekenler": {
    slug: "kira-tespit-davalarinda-dikkat-edilmesi-gerekenler",
    category: "Gayrimenkul Hukuku",
    date: "28 Eylül 2024",
    readTime: "7 Dk Okuma",
    title: "Kira Tespit ve Tahliye Davalarında Dikkat Edilmesi Gerekenler",
    author: {
      name: "Av. Süleyman UĞUR",
      role: "Kurucu Avukat / NAS Hukuk",
      image: "/law/attorney_robert.jpg"
    },
    heroImage: "/law/article_kira.jpg",
    summary: "Artan emsal kira bedelleri karşısında ev sahibi ve kiracıların yasal hakları, 5 yıllık süre hesabı ve tahliye süreçleri.",
    sections: [
      {
        heading: "1. 5 Yıllık Süre ve Kira Tespit Davası Şartları",
        content: [
          "Türk Borçlar Kanunu Madde 344 uyarınca 5 yılı dolduran kira sözleşmelerinde mahkeme emsal bedeller, hakkaniyet ve TÜFE oranlarını birlikte değerlendirerek yeni kira belirler."
        ],
        points: [
          "Dava öncesi zorunlu arabuluculuk şartı",
          "İhtarname gönderim zamanlaması",
          "Bilirkişi ve keşif aşamasında emsal sunumu"
        ]
      }
    ],
    keyTakeaways: [
      "Kira davalarında arabuluculuk başvurusu zorunludur.",
      "Tahliye taahhütnamelerinin geçerlilik unsurları avukat kontrolünde incelenmelidir."
    ],
    tags: ["Kira Hukuku", "Tahliye", "Gayrimenkul", "Av. Süleyman UĞUR"],
    tableOfContents: [
      "1. 5 Yıllık Kira Tespiti",
      "2. Tahliye Yolları"
    ]
  }
};
