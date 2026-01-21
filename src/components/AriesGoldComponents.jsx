const HTTPS_SERVER = "https://radatime.co.id/";
import React, { useEffect,useRef } from "react";

export const YouTubeSection = ({ variant = "default" }) => {
    const videoId = variant === "rose" ? "CPheDBozmnM" : "_98yvTXpDVk";
    const playerRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // load iframe api sekali
        console.log(window.YT)
        if (!window.YT) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(tag);
        }

        let player;

        window.onYouTubeIframeAPIReady = () => {
            player = new window.YT.Player(containerRef.current, {
                width: "100%",
                height: "100%",
                videoId,
                playerVars: {
                    autoplay: 1,
                    playsinline: 1,
                    loop: 1,
                    playlist: videoId,
                    controls: 0,
                    disablekb: 1,
                    modestbranding: 1,
                    rel: 0,
                },
                events: {
                    onReady: (e) => {
                        e.target.mute();
                        e.target.playVideo();
                    },
                },
            });

            playerRef.current = player;
        };

        return () => {
        if (playerRef.current) {
            playerRef.current.destroy();
        }
        };
    }, [videoId]);

    return (
        <div className="w-full" style={{ aspectRatio: "16/9" }}>
            <div
                ref={containerRef}
                style={{
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
};

export const HeroSection = ({ onGaransiClick }) => {
    return (
        <div className="pb-5 text-ag">
            <h1 className="resize" style={{ color: "white", fontWeight: 600 }}>
                Mahakarya 'Watchmaker Legacy' ke Dunia Moderen
            </h1>
            <br />
            <div className="flex justify-center w-full">
                <img
                    className="mt-4"
                    src={`${HTTPS_SERVER}image/landing_page/aries_gold_new/ag-logov4.png`}
                    alt="ag_logo"
                    style={{ width: "300px" }}
                />
            </div>
            <br />
            <span>X</span>
            <br />
            <div className="flex justify-center w-full">
                <img
                    className="mt-4"
                    src={`/rd_logo.png`}
                    alt="ag_logo"
                    style={{ width: "300px" }}
                />
            </div>
            <br />
            <a href="https://radatime.co.id/ariesgold">
                <span
                    className="text-white py-2 px-3 text-2xl border-[#f9a919] border-2 rounded-xl cursor-pointer hover:bg-[#f9a919] hover:text-black transition duration-300"
                >
                    Lihat di Radatime
                </span>
            </a>
        </div>
    );
};

export const CollabSection = ({ onImageClick }) => {
    const collabImages = [
        { id: 1, src: "AG-COLLABS-IMG1.jpg" },
        { id: 2, src: "AG-COLLABS-IMG2.jpg" },
        { id: 3, src: "AG-COLLABS-IMG3.jpg" },
        { id: 4, src: "AG-COLLABS-IMG4.jpg" },
    ];

    return (
        <div id="ga-landing-ariesgold-collab">
            <img
                id="modal-img-0"
                src={`${HTTPS_SERVER}image/landing_page/aries_gold_new/AG-GLOBAL-COLLAB.jpg`}
                alt="Aries Gold Custom 0"
                width="100%"
            />
            <div style={{ textAlign: "center" }}>
                {collabImages.map((img) => (
                    <img
                        key={img.id}
                        id={`modal-img-${img.id}`}
                        className="img-popup"
                        src={`${HTTPS_SERVER}image/landing_page/aries_gold_new/${img.src}`}
                        alt={`Aries Gold Custom ${img.id}`}
                        onClick={() => onImageClick(`${HTTPS_SERVER}image/landing_page/aries_gold_new/${img.src}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export const BestMaterialsSection = () => {
    const materials = [
        "AG-BEST-MATERIAL-STAINLESS.jpg",
        "AG-BEST-MATERIAL-CRYSTALL.jpg",
        "AG-BEST-MATERIAL-HIGHTECH.jpg",
        "AG-BEST-MATERIAL-04.jpg",
        "AG-BEST-MATERIAL-BERKELAS_DUNIA.jpg",
    ];

    return (
        <div id="ag_swiper">
            <div className="between-space">
                <h2 id="spesifikasi_terbaik" className="resize">
                    <span style={{ color: "rgba(0, 0, 0, 1)", fontFamily: "futura" }}>
                        <b>The Best Materials</b>
                    </span>
                </h2>
            </div>
            <div className="flex">
                <div className="swiper-container" style={{ width: "100%" }}>
                    <div
                        className="swiper-wrapper"
                        style={{
                            display: "flex",
                            overflowX: "auto",
                            scrollBehavior: "smooth",
                        }}
                    >
                        {materials.map((material, index) => (
                            <div key={index} style={{ minWidth: "100%" }}>
                                <img
                                    src={`${HTTPS_SERVER}image/landing_page/aries_gold_new/${material}`}
                                    alt="Material"
                                    style={{ width: "100%", height: "auto" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const CollectionCard = ({ title, description, imageAlt, imageSrc, links, layout = "left" }) => {
    const containerClass = layout === "left" ? "img-left" : "img-right";
    const textAlignClass = layout === "right" ? "text-right" : "";

    return (
        <div className={containerClass}>
            <div className="flex bg-ag">
                {layout === "left" ? (
                    <>
                        <div style={{ width: "10%" }}></div>
                        <div style={{ width: "90%", background: "#eaeaea" }}></div>
                    </>
                ) : (
                    <>
                        <div style={{ width: "90%", background: "#eaeaea" }}></div>
                        <div style={{ width: "10%" }}></div>
                    </>
                )}
            </div>
            <div className="flex ag_title">
                {layout === "left" && (
                    <div className="ag_collection_img">
                        <img src={imageSrc} alt={imageAlt} />
                    </div>
                )}
                <div className="ag_collection_text">
                    <h2 className="resize mb-3">
                        <b>{title}</b>
                    </h2>
                    <hr />
                    <p className="mb-4">{description}</p>
                    <div className={`flex flex-col ${layout === "right" && "items-end"}`}>
                        {links.map((link, index) => (
                            <a
                                key={index}
                                id={link.id}
                                className={`btn_ag m-0 ${textAlignClass}`}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <b>{link.label}</b>
                            </a>
                        ))}
                    </div>
                </div>
                {layout === "right" && (
                    <div className="ag_collection_img">
                        <img src={imageSrc} alt={imageAlt} />
                    </div>
                )}
            </div>
        </div>
    );
};

export const AllCollectionButton = ({ href, id }) => {
    return (
        <div className="container mt-3 mb-4">
            <div className="widget" style={{ textAlign: "center" }}>
                <a id={id} href={href} target="_blank" rel="noopener noreferrer">
                    <button className="btn_ag">
                        <b>SEMUA KOLEKSI</b>
                    </button>
                </a>
            </div>
        </div>
    );
};

export const CollectionsSection = () => {
    const collections = [
        {
            title: "INFINUM",
            description: "Jam Otomatis Eksklusif & In-House.",
            imageSrc: `${HTTPS_SERVER}image/landing_page/aries_gold_new/INFINUMv7.jpg`,
            imageAlt: "INFINUM",
            layout: "left",
            links: [
                {
                    id: "ga-landing-ariesgold-infinum",
                    label: "LIHAT KOLEKSI",
                    href: "/jam-tangan-aries-gold&filter_subtitle=Infinum",
                },
                {
                    id: "ga-landing-ariesgold-beli-infinum",
                    label: "BELI SEKARANG",
                    href: "/jam-tangan-original-pria-fashion-aries-gold-infinum-bfe9-g-9005a-rg-bk-f493",
                },
            ],
        },
        {
            title: "INSPIRE",
            description: "Desain Sport & Bertenaga Baterai.",
            imageSrc: `${HTTPS_SERVER}image/landing_page/aries_gold_new/INSPIREv6.jpg`,
            imageAlt: "INSPIRE",
            layout: "right",
            links: [
                {
                    id: "ga-landing-ariesgold-inspire",
                    label: "LIHAT KOLEKSI",
                    href: "/jam-tangan-aries-gold&filter_subtitle=Inspire",
                },
            ],
        },
        {
            title: "URBAN",
            description: "Casual, Moderen & Up to Date.",
            imageSrc: `${HTTPS_SERVER}image/landing_page/aries_gold_new/URBANv7.jpg`,
            imageAlt: "URBAN",
            layout: "left",
            links: [
                {
                    id: "ga-landing-ariesgold-urban",
                    label: "LIHAT KOLEKSI",
                    href: "/jam-tangan-aries-gold&filter_subtitle=Urban",
                },
            ],
        },
        {
            title: "ENCHANT",
            description: "Jam Wanita Elegan, Fashionable & Berkualitas Tinggi.",
            imageSrc: `${HTTPS_SERVER}image/landing_page/aries_gold_new/ENCHANTv4.jpg`,
            imageAlt: "ENCHANT",
            layout: "right",
            links: [
                {
                    id: "ga-landing-ariesgold-enchant",
                    label: "LIHAT KOLEKSI",
                    href: "/jam-tangan-aries-gold&filter_subtitle=Enchant",
                },
            ],
        },
        {
            title: "HERITAGE",
            description: "Koleksi Elegan dengan Legacy Abadi.",
            imageSrc: `${HTTPS_SERVER}image/landing_page/aries_gold_new/HERITAGEv3.jpg`,
            imageAlt: "HERITAGE",
            layout: "left",
            links: [
                {
                    id: "ga-landing-ariesgold-heritage",
                    label: "LIHAT KOLEKSI",
                    href: "/jam-tangan-aries-gold&filter_subtitle=Heritage",
                },
            ],
        },
    ];

    return (
        <div id="ag_tipe_collection">
            <div className="between-space">
                <h2 id="collections" className="resize">
                    <span style={{ color: "rgba(0, 0, 0, 1)", fontFamily: "futura" }}>
                        <b>Collections</b>
                    </span>
                </h2>
            </div>

            {collections.map((collection, index) => (
                <div key={index}>
                    <CollectionCard {...collection} />
                    {index === 1 && <AllCollectionButton id="ga-landing-ariesgold-allcollection-mid" href="/jam-tangan-aries-gold" />}
                </div>
            ))}

            <AllCollectionButton id="ga-landing-ariesgold-allcollection-bawah" href="/jam-tangan-aries-gold" />
        </div>
    );
};

export const CategorySection = () => {
    return (
        <div id="ag_btn_category">
            <div className="flex">
                <div className="w-50 p-2" style={{ width: "50%", padding: "0.5rem" }}>
                    <a
                        id="ga-landing-ariesgold-jam-tangan-pria"
                        href="/jam-tangan-pria?filter_manufacturer_id=230&stock=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={`${HTTPS_SERVER}image/landing_page/aries_gold_new/PRIA.jpg`}
                            alt="PRIA"
                            style={{ width: "100%" }}
                        />
                    </a>
                </div>
                <div className="w-50 p-2" style={{ width: "50%", padding: "0.5rem" }}>
                    <a
                        id="ga-landing-ariesgold-jam-tangan-wanita"
                        href="/jam-tangan-wanita?filter_manufacturer_id=230&stock=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={`${HTTPS_SERVER}image/landing_page/aries_gold_new/WANITA.jpg`}
                            alt="WANITA"
                            style={{ width: "100%" }}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export const InstagramSection = () => {
    return (
        <div id="ag_custom">
            <div className="mt-3" style={{ textAlign: "center", marginTop: "1rem" }}>
                <a
                    id="ga-landing-ariesgold-ig"
                    href="https://www.instagram.com/ariesgoldind"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        className="p-3"
                        style={{
                            fontSize: "30px !important",
                            borderRadius: "10px",
                            border: "1px solid",
                            padding: "0.75rem",
                            background: "transparent",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            src={`${HTTPS_SERVER}image/icon/instagram-logo.jpg`}
                            className="mr-1"
                            width="40"
                            height="40"
                            style={{ borderRadius: "10px", marginRight: "0.5rem" }}
                            alt="Instagram Logo"
                        />
                        ariesgoldind
                    </button>
                </a>
            </div>
            <div className="mt-3 p-3" style={{ textAlign: "center", marginTop: "1rem", padding: "0.75rem" }}>
                <img
                    className="w-50"
                    src={`${HTTPS_SERVER}image/landing_page/aries_gold_new/AG_CUSTOM.png`}
                    alt="Aries Gold Custom"
                    style={{ width: "50%" }}
                />
                <img
                    className="w-100 mt-3"
                    src={`${HTTPS_SERVER}image/landing_page/aries_gold_new/AG_CUSTOM2.png`}
                    alt="Aries Gold Custom"
                    style={{ width: "100%", marginTop: "1rem" }}
                />
            </div>
        </div>
    );
};

export const InfoSection = () => {
    const infos = [
        {
            icon: "ag_bebasongkir.png",
            title: "BEBAS ONGKIR",
            description: "Bebas Ongkir untuk pengiriman ke Seluruh Indonesia.",
        },
        {
            icon: "ag_garansi.png",
            title: "3 TAHUN GARANSI",
            description: "2 Tahun Garansi Internasional dan Garansi Tambahan selama 1 tahun dari RADATIME.",
        },
        {
            icon: "ag_bahanterbaik.png",
            title: "BAHAN TERBAIK DI KELASNYA",
            description: "Menggunakan bahan terbaik dengan harga yang terjangkau.",
        },
    ];

    return (
        <div className="flex" style={{ background: "black" }}>
            {infos.map((info, index) => (
                <div key={index} className="ag_info">
                    <div className="logo">
                        <img
                            style={{ maxWidth: "125px" }}
                            src={`${HTTPS_SERVER}image/landing_page/aries_gold_new/${info.icon}`}
                            alt={info.title}
                        />
                    </div>
                    <p>{info.title}</p>
                    <div className="text">{info.description}</div>
                </div>
            ))}
        </div>
    );
};

export const TestimonialSection = () => {
    const testimonials = [
        { image: "testi_new_01.jpg", quote: "Jam tangan ini sangat elegan & classy", author: "Isa D." },
        { image: "testi_new_02.jpg", quote: "Designnya bagus banget, gabisa berenti ngeliatin!", author: "Ashley C." },
        { image: "testi_new_03.jpg", quote: "Jam tangan yang sangat indah, pengiriman cepat dan pelayanan juga bagus", author: "Keith M." },
        { image: "testi_new_04.jpg", quote: "Bagus sekali ketika dipakai ditangan", author: "Shawn B." },
        { image: "testi_new_05.jpg", quote: "Pacarku sangat suka hadiah anniversarynya, terima kasih", author: "Tania M." },
        { image: "testi_new_06.jpg", quote: "Jam tangan yang bold, elegan, dan lebih bagus drpd di foto!", author: "Martin T." },
        { image: "testi_new_07.jpg", quote: "Nice watch, good quality", author: "Tasya T." },
        { image: "testi_new_08.jpg", quote: "Jam tangannya bagus, pasti akan beli lagi dari brand ini", author: "Jack Y." },
        { image: "testi_new_09.jpg", quote: "Jam tangan pertamaku cantik banget!", author: "James M." },
        { image: "testi_new_10.jpg", quote: "Aku beli ini untuk dipakai di hari pernikahan, banyak yang menyukainya terima kasih", author: "Fernandez M." },
        { image: "testi_new_11.jpg", quote: "Pengirimannya cepat sekali, aku pasti akan beli model lain lagi", author: "Teresa K." },
        { image: "testi_new_12.jpg", quote: "Ini jam pertamaku dari Aries Gold", author: "Carolyn M." },
        { image: "testi_01.jpg", quote: "Saya suka jam ini, stylenya bagus dan harganya terbaik", author: "Andrew M." },
        { image: "testi_02.jpg", quote: "Terima Kasih, jam tangannya bagus", author: "Walid S." },
        { image: "testi_03.jpg", quote: "Jam Chronograph yang cantik. Sungguh menawan", author: "Kiran S." },
        { image: "testi_04.jpg", quote: "Sangat suka, pembelian jam kedua saya untuk koleksi. kualitas tali terbaik", author: "Hewwit G." },
        { image: "testi_05.jpg", quote: "Membeli untuk pacar saya dan dia suka. terlihat sedikit besar di pergelangan tangannya", author: "Sherin O." },
        { image: "testi_06.jpg", quote: "Saya sangat suka, jam kedua saya dari Aries Gold. Saya suka dengan design", author: "Melisa O." },
        { image: "testi_07.jpg", quote: "Dengan harga segini bisa dapat jam seharga puluhan juta. langsung jatuh hati pada Aries Gold", author: "Indra Gunawan." },
        { image: "testi_08.jpg", quote: "Takut salah pilih untuk hadiah istri saya, saya melihat lihat jam tangan yang ada di Radatime ketemu brand Aries Gold dan mata saya suka dan berharap istri saya juga suka. Jadi beranikan diri untuk beli ternyata istri saya sangat senang atas jam ini. Mewah dan Cantik Katanya", author: "Ali Akbar." },
        { image: "testi_09.jpg", quote: "Tidak Mengecewakan, Jam tangan aries gold bener bener keren dan oke punya seperti yang disarankan sama temen temen saya", author: "Herman Wijaya." },
        { image: "testi_10.jpg", quote: "Koleksi Jam Tangan Aries Gold, semua design saya suka. ada Rezeki nambah lagi", author: "Muhammad Abdillah." },
        { image: "testi_11.jpg", quote: "Tidak Pernah nemu jam secantik ini dan pas lagi di tangan aku cocok banget", author: "Cindy." },
        { image: "testi_12.jpg", quote: "Keren dengan design terbaik dikelasnya. berasa harga puluhan juta premium banget", author: "Naufal Utomo." },
    ];

    return (
        <div id="ag_testimonial">
            <h2 className="mt-5 mb-4" style={{ textAlign: "center" }}>
                <b>TESTIMONIALS</b>
            </h2>
            <div className="flex" style={{ margin: "0px 6rem" }}>
                {testimonials.map((testi, index) => (
                    <div key={index} className="column">
                        <img
                            src={`${HTTPS_SERVER}image/landing_page/aries_gold_new/${testi.image}`}
                            alt={`Testimoni ${index + 1}`}
                        />
                        <p>
                            <b>"{testi.quote}"</b>
                        </p>
                        <p>- {testi.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const ImageModal = ({ isOpen, imageSrc, onClose }) => {
    return (
        <div
            className="modal"
            style={{
                display: isOpen ? "block" : "none",
                position: "fixed",
                zIndex: 1000,
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.8)",
                paddingTop: "3rem",
            }}
        >
            <div style={{ width: "50%", margin: "0px auto" }}>
                <span
                    onClick={onClose}
                    style={{
                        color: "white",
                        fontSize: "40px",
                        cursor: "pointer",
                        float: "right",
                    }}
                >
                    &times;
                </span>
                <img src={imageSrc} alt="Modal" style={{ width: "100%" }} />
            </div>
        </div>
    );
};

export const WarrantyModal = ({ isOpen, onClose }) => {
    const terms = [
        "Lama Garansi: Garansi uang kembali berlaku selama 14 hari sejak tanggal penerimaan.",
        "Kondisi Pengembalian: Untuk memenuhi syarat pengembalian, produk jam tangan harus dalam kondisi seperti baru, tidak terpakai, dan dalam kemasan asli beserta semua aksesori yang disertakan.",
        "Bukti Pembelian: Pembeli harus dapat menyediakan bukti pembelian asli, seperti faktur atau tanda terima.",
        "Biaya Pengembalian: Biaya pengiriman untuk mengembalikan produk menjadi tanggung jawab pembeli. Biaya asuransi dan pengiriman tidak dapat dikembalikan.",
        "Kerusakan atau Kehilangan: Kami tidak bertanggung jawab atas kerusakan atau kehilangan produk selama pengiriman pengembalian. Disarankan untuk menggunakan layanan pengiriman dengan nomor pelacakan.",
        "Pemeriksaan Produk: Produk akan diperiksa oleh tim kami untuk memastikan bahwa tidak ada kerusakan atau tanda-tanda penggunaan sebelum pengembalian uang dilakukan.",
        "Syarat Pengembalian: Sebelum dikembalikan, jam tangan wajib difoto dan divideo untuk kemudian diverifikasi oleh tim kami untuk melanjutkan proses pengembalian.",
        "Proses Pengembalian: Setelah produk kami terima dan pemeriksaan selesai, kami akan mengembalikan uang pembelian ke metode pembayaran yang digunakan semula. Proses ini dapat memakan waktu hingga 14 hari kerja.",
        "Pembatalan Garansi: Garansi uang kembali tidak berlaku jika produk telah mengalami perbaikan atau modifikasi oleh pihak ketiga tanpa persetujuan kami.",
        "Pengembalian Produk Palsu: Jika kami menemukan bahwa produk yang dikembalikan adalah produk palsu atau bukan produk kami, kami berhak menolak pengembalian dan dapat melaporkan aktivitas tersebut kepada pihak berwenang.",
        "Pengembalian Produk Cacat: Jika produk yang diterima oleh pembeli cacat atau rusak, pembeli harus segera menghubungi layanan pelanggan kami untuk mendiskusikan penggantian atau perbaikan.",
        "Kewajiban Pengiriman: Pembeli bertanggung jawab untuk mengirim produk kembali dalam waktu yang telah ditentukan dan dengan cara yang aman.",
    ];

    return (
        <div
            style={{
                display: isOpen ? "block" : "none",
                position: "fixed",
                zIndex: 1000,
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.8)",
                paddingTop: "3rem",
            }}
        >
            <div className="modal-content" style={{ width: "50%", margin: "0px auto" }}>
                <div className="modal-header">
                    <div className="modal-title">
                        <h4 style={{ margin: 0 }}>Garansi Uang Kembali – Aries Gold</h4>
                    </div>
                    <span onClick={onClose} className="close" style={{ fontSize: "30px", cursor: "pointer" }}>
                        &times;
                    </span>
                </div>
                <div className="modal-body" style={{ height: "450px", overflowY: "scroll" }}>
                    <p>Syarat & Ketentuan:</p>
                    <ol style={{ paddingLeft: "1.5rem" }}>
                        {terms.map((term, index) => (
                            <li key={index}>{term}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};
