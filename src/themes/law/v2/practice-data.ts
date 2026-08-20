export interface PracticeArea {
  slug: string;
  badge: string;
  title: string;
  subtitle: string;
  summary: string;
  heroImage: string;
  highlights: string[];
  stats: { value: string; label: string }[];
  subServices: {
    title: string;
    description: string;
    points: string[];
  }[];
  processSteps: {
    number: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const practiceAreasData: Record<string, PracticeArea> = {
  "ceza-hukuku": {
    slug: "ceza-hukuku",
    badge: "AĞIR CEZA & SORUŞTURMA SAVUNMASI",
    title: "Ceza & Ağır Ceza Hukuku",
    subtitle: "Soruşturma aşamasından Yargıtay sürecine kadar tavizsiz ve stratejik savunma.",
    summary: "NAS Hukuk & Danışmanlık olarak; ağır ceza davaları, ekonomik suçlar, bilişim suçları ve tutuklama tedbirlerine karşı Avukat Süleyman UĞUR liderliğinde etkin, anlık ve sonuç odaklı savunma stratejileri geliştiriyoruz.",
    heroImage: "/law/practice_ceza.jpg",
    highlights: [
      "7/24 Acil Gözaltı ve İfade Alma Desteği",
      "Ağır Ceza Mahkemelerinde Kapsamlı Duruşma Temsili",
      "Mali ve Ekonomik Ceza Dosyalarında Uzman Savunma",
      "İstinaf ve Yargıtay Temyiz Süreçlerinin Takibi"
    ],
    stats: [
      { value: "%98", label: "Savunma Başarısı" },
      { value: "500+", label: "Sonuçlanan Dava" },
      { value: "7/24", label: "Acil Müdahale" }
    ],
    subServices: [
      {
        title: "Ağır Ceza Davaları",
        description: "Organize suçlar, kasten öldürme, nitelikli yağma ve zimmet gibi yüksek hapis cezası riskli davalarda teknik ve stratejik savunma.",
        points: ["Duruşma savunması ve çapraz sorgu", "Hukuka aykırı delillerin ayıklanması", "Adli tıp ve bilirkişi rapor analizi"]
      },
      {
        title: "Mali & Beyaz Yaka Suçları",
        description: "Nitelikli dolandırıcılık, güveni kötüye kullanma, vergi usul kanununa muhalefet ve kaçakçılık soruşturmalarında kurumsal savunma.",
        points: ["Finansal veri incelemesi", "MASAK soruşturmaları savunması", "Şirket içi suistimal denetimi"]
      },
      {
        title: "Soruşturma & Gözaltı Takibi",
        description: "Kolluk ve savcılık aşamalarındaki ifade alma, arama, elkoyma ve sorgu işlemlerinde müvekkilin haklarının eksiksiz korunması.",
        points: ["Emniyet & Savcılık ifade refakati", "Tutuklamaya itiraz süreçleri", "Adli kontrol tedbiri takibi"]
      },
      {
        title: "İstinaf & Temyiz (Yargıtay)",
        description: "Yerel mahkeme kararlarının Bölge Adliye Mahkemesi ve Yargıtay nezdinde bozulması için gerekçeli temyiz dilekçelerinin hazırlanması.",
        points: ["Kapsamlı dosya ve içtihat taraması", "Temyiz duruşmalarında sözlü savunma", "Anayasa Mahkemesi bireysel başvuru"]
      }
    ],
    processSteps: [
      {
        number: "01",
        title: "Acil Durum Değerlendirmesi",
        description: "Gözaltı, tutuklama veya dosya tensip zaptı hemen incelenerek risk haritası çıkartılır."
      },
      {
        number: "02",
        title: "Delil & Usul Stratejisi",
        description: "Lehe olan tüm maddi deliller toplanır, hukuka aykırı delillerin tespiti yapılır."
      },
      {
        number: "03",
        title: "Duruşma ve Savunma",
        description: "Avukat Süleyman UĞUR tarafından mahkemede güçlü ve tavizsiz sözlü ve yazılı savunma yürütülür."
      },
      {
        number: "04",
        title: "Kanun Yolları & Tahliye",
        description: "Kararın lehe kesinleşmesi veya beraat/tahliye için tüm üst mahkeme süreçleri yönetilir."
      }
    ],
    faqs: [
      {
        question: "Gözaltına alınan kişi için avukat ne zaman devreye girebilir?",
        answer: "Avukat, gözaltı anından itibaren müvekkiliyle her zaman görüşme hakkına sahiptir. Kolluk ve savcılık ifadelerinde mutlaka avukat refakati önerilmektedir."
      },
      {
        question: "Tutuklama kararına kaç gün içinde itiraz edilmelidir?",
        answer: "Sulh Ceza Hakimliği tarafından verilen tutuklama kararına, tefhim veya tebliğden itibaren 7 gün içinde Asliye Ceza Mahkemesi nezdinde itiraz edilmelidir."
      }
    ]
  },
  "is-hukuku": {
    slug: "is-hukuku",
    badge: "İŞ & SOSYAL GÜVENLİK HUKUKU",
    title: "İş & Sosyal Güvenlik Hukuku",
    subtitle: "Kıdem tazminatı, işe iade ve işyeri uyuşmazlıklarında sonuç odaklı hukuki destek.",
    summary: "NAS Hukuk & Danışmanlık, hem işçi haklarının korunmasında hem de işveren şirketlerin iş hukuku risklerini minimize etmesinde kurumsal ve bireysel danışmanlık sunmaktadır.",
    heroImage: "/law/practice_is.jpg",
    highlights: [
      "Kıdem, İhbar ve Fazla Mesai Alacakları Hesaplaması",
      "Zorunlu Arabuluculuk Süreçlerinin Yönetimi",
      "İşe İade Davaları ve Boşta Geçen Süre Tazminatı",
      "İş Sözleşmeleri ve Şirket İç Yönetmelik Hazırlığı"
    ],
    stats: [
      { value: "%97", label: "Dava Kazanma Oranı" },
      { value: "1000+", label: "Tazminat Dosyası" },
      { value: "15 Gün", label: "Ortalama Arabuluculuk" }
    ],
    subServices: [
      {
        title: "İşçilik Alacakları & Tazminat",
        description: "Kıdem, ihbar, yıllık izin, hafta tatili ve fazla mesai alacaklarının bilirkişi standartlarında hesaplanıp tahsili.",
        points: ["Dava öncesi detaylı hesaplama", "İcra ve tahsilat takibi", "Haksız fesih tazminatları"]
      },
      {
        title: "İşe İade Davaları",
        description: "Geçerli bir sebep gösterilmeden işten çıkarılan çalışanlar için 1 ay içinde açılması gereken işe iade davaları.",
        points: ["Arabuluculuk müzakereleri", "Boşta geçen süre ücreti", "İşe başlatmama tazminatı"]
      },
      {
        title: "İş Kazası & Meslek Hastalığı",
        description: "İş kazası sonucu oluşan maddi ve manevi zararların, maluliyet oranına göre SGK ve işverenden tazmini.",
        points: ["Kusur oranı ve aktüerya hesabı", "Maddi-manevi tazminat davası", "Ceza davası müşteki vekilliği"]
      },
      {
        title: "İşveren Danışmanlığı",
        description: "Şirketlerin iş sözleşmeleri, disiplin kurulu süreçleri ve fesih bildirimlerinin hukuka uygun hazırlanması.",
        points: ["Özlük dosyası denetimi", "İhtarname ve fesih protokolleri", "Toplu iş sözleşmesi müzakereleri"]
      }
    ],
    processSteps: [
      {
        number: "01",
        title: "Alacak Kalemlerinin Tespiti",
        description: "Çalışma süresi, bordrolar ve banka kayıtları incelenerek hak edilen tutar netleştirilir."
      },
      {
        number: "02",
        title: "Zorunlu Arabuluculuk",
        description: "Dava şartı olan arabuluculuk görüşmelerinde müvekkil adına en yüksek kazanım hedeflenir."
      },
      {
        number: "03",
        title: "İş Mahkemesi Davası",
        description: "Anlaşma sağlanamaması halinde İş Mahkemesinde tensip ve tanık aşamaları yürütülür."
      },
      {
        number: "04",
        title: "İlamlı İcra & Tahsilat",
        description: "Mahkeme kararı gecikmeksizin icraya konularak alacakların nakit tahsili sağlanır."
      }
    ],
    faqs: [
      {
        question: "İşe iade davası açma süresi ne kadardır?",
        answer: "İş sözleşmesinin feshinin tebliğ edildiği tarihten itibaren 1 ay içinde arabulucuya başvurulması zorunludur."
      },
      {
        question: "İstifa eden işçi kıdem tazminatı alabilir mi?",
        answer: "Haklı bir neden (maaşın geç ödenmesi, sigortanın eksik yatması, mobbing vb.) bulunması halinde çalışan haklı fesih yaparak kıdem tazminatını talep edebilir."
      }
    ]
  },
  "ticaret-hukuku": {
    slug: "ticaret-hukuku",
    badge: "TİCARET & ŞİRKETLER HUKUKU",
    title: "Ticaret & Şirketler Hukuku",
    subtitle: "Şirketler için sözleşme mimarisi, ortaklık uyuşmazlıkları ve kurumsal danışmanlık.",
    summary: "NAS Hukuk & Danışmanlık; yerli ve yabancı şirketlere genel kurul işlemlerinden birleşme-devralmalara, ticari alacak davalarından konkordato süreçlerine kadar tam kapsamlı kurumsal hukuk danışmanlığı sağlamaktadır.",
    heroImage: "/law/practice_ticaret.jpg",
    highlights: [
      "Şirket Kuruluş, Esas Sözleşme ve Genel Kurul Yönetimi",
      "Birleşme & Devralmalar (M&A) ve Due Diligence Denetimi",
      "Ortaklar Arası Uyuşmazlıklar ve Pay Sahipliği Davaları",
      "Ticari Alacakların Hızlı İcrai Tahsili ve İhtiyati Haciz"
    ],
    stats: [
      { value: "₺250M+", label: "Yönetilen Portföy" },
      { value: "120+", label: "Kurumsal Danışmanlık" },
      { value: "%99", label: "Sözleşme Başarısı" }
    ],
    subServices: [
      {
        title: "Şirketler Hukuku & M&A",
        description: "Şirket birleşmeleri, hisse devir sözleşmeleri, sermaye artırımı ve yönetim kurulu kararlarının hukuki tasarımı.",
        points: ["Hukuki inceleme (Due Diligence)", "Hissedarlar sözleşmesi (SHA)", "Ana sözleşme tadilleri"]
      },
      {
        title: "Ticari Alacak & İcra Takibi",
        description: "Fatura, çek, senet ve cari hesap kaynaklı ticari alacakların ihtiyati haciz kararlarıyla süratle tahsili.",
        points: ["İhtiyati haciz ve tedbir kararları", "Menfi tespit ve istirdat davaları", "İtirazın iptali davaları"]
      },
      {
        title: "Ticari Sözleşmeler",
        description: "Distribütörlük, franchise, bayilik, tedarik ve lisans sözleşmelerinin sıfır risk prensibiyle hazırlanması.",
        points: ["Cezai şart ve teminat yapılandırması", "Yetki ve tahkim şartı optimizasyonu", "Fesih ve tazminat yönetimi"]
      },
      {
        title: "Haksız Rekabet & Ticari Marka",
        description: "Ticari sırların korunması, haksız rekabet davaları ve marka-patent ihlallerinin engellenmesi.",
        points: ["Haksız rekabetin önlenmesi", "Ticari itibarın korunması", "Tazminat ve tedbir talepleri"]
      }
    ],
    processSteps: [
      {
        number: "01",
        title: "Risk Analizi & Mevzuat Denetimi",
        description: "Şirketin hukuki altyapısı ve sözleşmeleri taranarak olası ihtilaflar önceden önlenir."
      },
      {
        number: "02",
        title: "Müzakere & Taslak Oluşturma",
        description: "Ticari anlaşmalarda müvekkilin menfaatlerini koruyan sağlam metinler hazırlanır."
      },
      {
        number: "03",
        title: "İcra ve Dava Yolları",
        description: "Uyuşmazlık doğduğunda Asliye Ticaret Mahkemeleri ve İcra Dairelerinde hızlı aksiyon alınır."
      },
      {
        number: "04",
        title: "Sürekli Koruyucu Hukuk",
        description: "Şirket organlarının tüm kararları Türk Ticaret Kanunu'na tam uyumlu tutulur."
      }
    ],
    faqs: [
      {
        question: "Ticari alacaklarda ihtiyati haciz ne kadar sürede alınır?",
        answer: "Gerekli evraklar (vadesi geçmiş çek, senet, mutabakat vb.) hazır olduğunda 24-48 saat içinde yetkili mahkemeden ihtiyati haciz kararı alınabilmektedir."
      },
      {
        question: "Ticaret davalarında arabuluculuk zorunlu mudur?",
        answer: "Evet, Türk Ticaret Kanunu uyarınca konusu bir miktar paranın ödenmesi olan ticari davalarda dava açmadan önce arabuluculuğa başvurmak zorunludur."
      }
    ]
  },
  "aile-hukuku": {
    slug: "aile-hukuku",
    badge: "AİLE & BOŞANMA HUKUKU",
    title: "Aile & Boşanma Hukuku",
    subtitle: "Boşanma, mal paylaşımı, velayet ve nafaka davalarında titiz ve gizlilik esaslı temsil.",
    summary: "NAS Hukuk & Danışmanlık olarak; tarafların hak kaybına uğramaması ve özellikle müşterek çocukların üstün yararının korunması için Avukat Süleyman UĞUR gözetiminde hassas, şeffaf ve kararlı bir süreç yönetiyoruz.",
    heroImage: "/law/practice_aile.jpg",
    highlights: [
      "Anlaşmalı Boşanma Protokollerinin Hazırlanması",
      "Çekişmeli Boşanma ve Kusur İspatı Stratejisi",
      "Edinilmiş Mallara Katılma ve Katkı Payı Davaları",
      "Geçici Tedbir, Nafaka ve Velayet Talepleri"
    ],
    stats: [
      { value: "450+", label: "Çözümlenen Dosya" },
      { value: "%100", label: "Gizlilik & Mahremiyet" },
      { value: "1 Günde", label: "Anlaşmalı Boşanma" }
    ],
    subServices: [
      {
        title: "Anlaşmalı Boşanma",
        description: "Maddi-manevi tazminat, nafaka, velayet ve mal paylaşımı hususlarında adil protokol tanzimi ile tek celsede boşanma.",
        points: ["Kapsamlı boşanma protokolü", "Tek celsede kesinleşme", "Nafaka ve velayet güvencesi"]
      },
      {
        title: "Çekişmeli Boşanma Davaları",
        description: "Aldatma (zina), şiddet, onur kırıcı davranış ve evlilik birliğinin temelinden sarsılması nedenleriyle açılan davalar.",
        points: ["Kusur ispatı ve delil sunumu", "Maddi ve manevi tazminat", "Tanık dinletimi ve çapraz sorgu"]
      },
      {
        title: "Mal Rejimi & Mal Paylaşımı",
        description: "Evlilik süresince edinilen taşınmaz, araç, şirket hissesi ve banka birikimlerinin yasal pay oranında paylaştırılması.",
        points: ["Mal kaçırmayı önleyici tedbirler", "Değer artış payı ve artık değer hesabı", "Ziynet eşyası alacağı davaları"]
      },
      {
        title: "Velayet & Nafaka Uyuşmazlıkları",
        description: "Tedbir, iştirak ve yoksulluk nafakası ile velayetin değiştirilmesi davalarında müvekkil haklarının savunulması.",
        points: ["Nafaka artırım ve uyarlama davaları", "Velayet tespiti ve değiştirilmesi", "Kişisel ilişki tesisi"]
      }
    ],
    processSteps: [
      {
        number: "01",
        title: "Gizli Ön Görüşme",
        description: "Ailevi durum ve talepler %100 mahremiyet ilkesi doğrultusunda detaylıca dinlenir."
      },
      {
        number: "02",
        title: "Protokol veya Dava Hazırlığı",
        description: "Mümkünse anlaşma zemini aranır; aksi halde eksiksiz delil listesi ile dava dilekçesi hazırlanır."
      },
      {
        number: "03",
        title: "Tedbir Kararlarının Alınması",
        description: "Dava açılır açılmaz nafaka, konut tahsisi ve mal varlığına tedbir şerhleri konulur."
      },
      {
        number: "04",
        title: "Kararın Kesinleşmesi",
        description: "Gerekçeli kararın yazımı ve nüfus kayıtlarının güncellenmesi tamamlanır."
      }
    ],
    faqs: [
      {
        question: "Anlaşmalı boşanma için evliliğin ne kadar sürmüş olması gerekir?",
        answer: "Türk Medeni Kanunu uyarınca anlaşmalı boşanma davası açabilmek için evliliğin en az 1 yıl sürmüş olması şarttır."
      },
      {
        question: "Boşanma davasında delil olarak neler kullanılabilir?",
        answer: "Hukuka uygun elde edilmiş mesajlaşma kayıtları, otel kayıtları, banka hareketleri, tanık beyanları ve resmi belgeler delil olarak sunulabilir."
      }
    ]
  },
  "gayrimenkul-hukuku": {
    slug: "gayrimenkul-hukuku",
    badge: "GAYRİMENKUL & KİRA HUKUKU",
    title: "Gayrimenkul & İmar Hukuku",
    subtitle: "Tapu iptal tescil, kira tahliye davaları ve mülkiyet uyuşmazlıklarında uzman avukatlık.",
    summary: "NAS Hukuk & Danışmanlık; mülkiyet haklarının korunması, kentsel dönüşüm uyuşmazlıkları, ecrimisil, ortaklığın giderilmesi ve güncel kira hukuku ihtilaflarında güçlü hukuki temsil sunar.",
    heroImage: "/law/practice_gayrimenkul.jpg",
    highlights: [
      "Tapu İptal ve Tescil (Muris Muvazaası) Davaları",
      "Kira Tespiti ve İhtiyaç/Tahliye Davaları",
      "Ortaklığın Giderilmesi (İzale-i Şüyu) Süreçleri",
      "Kentsel Dönüşüm ve Kat Karşılığı İnşaat Sözleşmeleri"
    ],
    stats: [
      { value: "₺180M+", label: "Gayrimenkul Değeri" },
      { value: "350+", label: "Kira & Tahliye Dosyası" },
      { value: "%96", label: "Tahliye Başarısı" }
    ],
    subServices: [
      {
        title: "Tapu İptal & Tescil Davaları",
        description: "Muris muvazaası, sahtecilik, vekalet görevinin kötüye kullanılması ve inançlı işlem kaynaklı tapu davaları.",
        points: ["İhtiyati tedbir kararları", "Kadastro ve tapu kütüğü incelemesi", "Miras paylaşım iptali"]
      },
      {
        title: "Kira Hukuku & Tahliye",
        description: "Tahliye taahhütnamesi, 10 yıllık uzama süresi, ihtiyaç sebebiyle tahliye ve kira bedeli tespit davaları.",
        points: ["İcra takibi ve tahliye (Örnek 13)", "Kira tespit ve uyarlama davaları", "Kira alacağı tahsili"]
      },
      {
        title: "Ortaklığın Giderilmesi (İzale-i Şüyu)",
        description: "Miras veya müşterek mülkiyet konusu taşınmazların aynen taksim veya açık artırma yoluyla satışla paylaşılması.",
        points: ["Kıymet takdiri itirazları", "Satış memurluğu takibi", "Hissedarlar arası dengeleme"]
      },
      {
        title: "Kat Karşılığı İnşaat & Kentsel Dönüşüm",
        description: "Müteahhit ve arsa sahipleri arasındaki sözleşmeler, gecikme tazminatları ve kentsel dönüşüm kararlarına itiraz.",
        points: ["Sözleşme feshi ve tazminat", "Eksik ve ayıplı iş tespiti", "İmar planı iptal davaları"]
      }
    ],
    processSteps: [
      {
        number: "01",
        title: "Tapu ve Belediye Kayıt Analizi",
        description: "Taşınmaz üzerindeki tüm şerhler, ipotekler ve imar durum belgeleri incelenir."
      },
      {
        number: "02",
        title: "İhtiyati Tedbir Talebi",
        description: "Dava konusu taşınmazın üçüncü kişilere devrini önlemek için tapuya tedbir konulur."
      },
      {
        number: "03",
        title: "Keşif ve Bilirkişi İncelemesi",
        description: "Mahkeme heyetiyle mahallinde keşif yapılarak gerçek piyasa değerleri tespit ettirilir."
      },
      {
        number: "04",
        title: "Tescil veya Tahliye İnfazı",
        description: "Kesinleşen karar Tapu Müdürlüğü'nde tescil edilir veya İcra kanalıyla tahliye uygulanır."
      }
    ],
    faqs: [
      {
        question: "Kira tespit davası ne zaman açılabilir?",
        answer: "Kira sözleşmesinin başlangıcından itibaren 5 yıl geçtikten sonra, emsal kira bedellerine göre yeni kiranın belirlenmesi için kira tespit davası açılabilir."
      },
      {
        question: "Tahliye taahhütnamesi ile kiracı ne kadar sürede tahliye edilir?",
        answer: "Usulüne uygun düzenlenmiş tahliye taahhütnamesine dayanarak icra takibi başlatıldığında, itiraz olmaması halinde 1-2 ay içinde tahliye gerçekleşebilir."
      }
    ]
  },
  "sozlesmeler-hukuku": {
    slug: "sozlesmeler-hukuku",
    badge: "SÖZLEŞMELER & RİSK MİMARİSİ",
    title: "Sözleşmeler Hukuku",
    subtitle: "Her türlü ticari ve özel sözleşmenin sıfır risk prensibiyle hazırlanması ve denetimi.",
    summary: "NAS Hukuk & Danışmanlık; ileride doğabilecek tüm ihtilafları önceden engelleyen koruyucu sözleşme mimarisi kurar. Avukat Süleyman UĞUR, sözleşme müzakerelerinden fesih protokollerine kadar her aşamada tam koruma sağlar.",
    heroImage: "/law/practice_sozlesmeler.jpg",
    highlights: [
      "İki ve Çok Taraflı Ticari Sözleşmelerin Hazırlanması",
      "Sözleşme Risk ve Cezai Şart Analiz Raporları",
      "Uluslararası Ticaret Sözleşmeleri (CISG & Incoterms)",
      "Sözleşmeden Dönme, Fesih ve İhtarname Süreçleri"
    ],
    stats: [
      { value: "1500+", label: "İncelenen Sözleşme" },
      { value: "%100", label: "Hukuki Koruma" },
      { value: "24 Saat", label: "Hızlı İnceleme" }
    ],
    subServices: [
      {
        title: "Ticari Anlaşma & Tedarik Sözleşmeleri",
        description: "Hizmet alımı, satış, lisans, bayilik, acentelik ve distribütörlük sözleşmelerinin düzenlenmesi.",
        points: ["Sorumluluk sınırlaması maddeleri", "Gizlilik (NDA) ve rekabet etmeme", "Mücbir sebep ve uyarlama hükümleri"]
      },
      {
        title: "Şirketler Arası Protokoller",
        description: "Ortak girişim (Joint Venture), niyet mektubu (LoI), gizlilik anlaşması ve ön sözleşmeler.",
        points: ["Bağlayıcılık analizi", "Ön alım ve rüçhan hakları", "Pay devir kısıtlamaları"]
      },
      {
        title: "Gayrimenkul & Kira Sözleşmeleri",
        description: "AVM kira, ticari işletme kiralama, arsa payı karşılığı inşaat ve gayrimenkul satış vaadi sözleşmeleri.",
        points: ["Ciro kirası ve endeksleme", "Teminat mektubu & kefalet", "Tahliye taahhüdü entegrasyonu"]
      },
      {
        title: "Sözleşme Uyuşmazlıkları & Fesih",
        description: "Borca aykırılık, temerrüt, cezai şart talepleri ve haklı sebeple sözleşme fesih ihtarnameleri.",
        points: ["Noter ihtarnamesi tanzimi", "Müsbet ve menfi zarar hesabı", "Arabuluculuk ve dava takibi"]
      }
    ],
    processSteps: [
      {
        number: "01",
        title: "Ticari Hedef ve Risk Tespiti",
        description: "Müvekkilin ticari hedefleri dinlenerek karşı taraftan gelebilecek riskler listelenir."
      },
      {
        number: "02",
        title: "Metin Taslağı ve Madde Mimarisi",
        description: "Yargıtay içtihatlarına tam uyumlu, açık ve net hükümler içeren sözleşme taslağı oluşturulur."
      },
      {
        number: "03",
        title: "Müzakere Masası Yönetimi",
        description: "Karşı tarafın avukatları ile revizyon süreçleri yürütülerek maksimum menfaat temin edilir."
      },
      {
        number: "04",
        title: "İmza ve Yürürlük Takibi",
        description: "Yetkili imzalar, damga vergisi ve yürürlük şartları kontrol edilerek arşivlenir."
      }
    ],
    faqs: [
      {
        question: "Sözleşmede cezai şart bulunması ne sağlar?",
        answer: "Cezai şart, karşı tarafın borcunu yerine getirmemesi halinde zarar ispatına gerek kalmaksızın belirlenen bedelin doğrudan talep edilebilmesini sağlar."
      },
      {
        question: "Sözleşme hazırlanırken avukat desteği neden gereklidir?",
        answer: "İnternetten bulunan taslaklar güncel kanunlara aykırı hükümler içerebilir ve geçersiz sayılabilir. Uzman avukat tarafından hazırlanan sözleşme ise olası milyonluk davaları baştan engeller."
      }
    ]
  }
};
