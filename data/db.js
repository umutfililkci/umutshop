

var products = [
    {
        id: 1, category: "Telefon", name: "iPhone 14", image: "product/iPhone14.jpg", isHome: true, isNew: false,
        prices: [
            { productId: 1, provider: "Trendyol", price: 44500, image: "provider/trendyol.jpg" },
            { productId: 1, provider: "Hepsiburada", price: 43900, image: "provider/hepsiburada.jpg" },
            { productId: 1, provider: "N11", price: 45345, image: "provider/n11.jpg" }],
        attributes: [{ key: "İşlemci Hızı", value: "3,2 Ghz" }, { key: "Dahili Hafıza", value: "128 GB" }, { key: "Bellek", value: "6 GB" }, { key: "Batarya", value: "2379 mAh" }, { key: "Kamera", value: "12 mpx" }]
    },
    {
        id: 2, category: "Telefon", name: "Galaxy S22", image: "product/S22.jpg", isHome: true, isNew: true,
        prices: [
            { productId: 1, provider: "Trendyol", price: 20950, image: "provider/trendyol.jpg" },
            { productId: 1, provider: "Hepsiburada", price: 20600, image: "provider/hepsiburada.jpg" },
            { productId: 1, provider: "N11", price: 20250, image: "provider/n11.jpg" }],
        attributes: [{ key: "İşlemci Hızı ", value: "2,8 Ghz" }, { key: "Dahili Hafıza", value: "515 GB" }, { key: "Bellek", value: "12 GB" }, { key: "Batarya", value: "5000 mAh" }, { key: "Kamera", value: "108 mpx" }]
    },
    {
        id: 3, category: "Televizyon", name: "LG OLED 65\"", image: "product/lg.jpg", isHome: false, isNew: false,
        prices: [
            { productId: 1, provider: "Trendyol", price: 67500, image: "provider/trendyol.jpg" },
            { productId: 1, provider: "Hepsiburada", price: 66250, image: "provider/hepsiburada.jpg" },
            { productId: 1, provider: "N11", price: 69200, image: "provider/n11.jpg" }],
        attributes: [{ key: "Çözünürlük", value: "4K" }, { key: "Görüntü Teknolojisi", value: "OLED" }, { key: "Derinlik", value: "246" }]
    },
    {
        id: 4, category: "Televizyon", name: "Philips 65PUS8808 65\"", image: "product/philips.jpg", isHome: true, isNew: true,
        prices: [
            { productId: 1, provider: "Trendyol", price: 43200, image: "provider/trendyol.jpg" },
            { productId: 1, provider: "Hepsiburada", price: 42400, image: "provider/hepsiburada.jpg" },
            { productId: 1, provider: "N11", price: 43500, image: "provider/n11.jpg" }],
        attributes: [{ key: "Çözünürlük", value: "4K" }, { key: "Görüntü Teknolojisi", value: "LED" }, { key: "Derinlik", value: "281" }]
    },
    {
        id: 5, category: "Telefon", name: "Xiaomi Redmi Note 12 Pro", image: "product/xiaomi.jpg", isHome: true, isNew: true,
        prices: [
            { productId: 1, provider: "Trendyol", price: 9950, image: "provider/trendyol.jpg" },
            { productId: 1, provider: "Hepsiburada", price: 10000, image: "provider/hepsiburada.jpg" },
            { productId: 1, provider: "N11", price: 10000, image: "provider/n11.jpg" }],
        attributes: [{ key: "İşlemci Hızı", value: "2,3 Ghz" }, { key: "Dahili Hafıza", value: "256 GB" }, { key: "Bellek", value: "8 GB" }, { key: "Batarya", value: "5000 mAh" }, { key: "Kamera", value: "108 mpx" }]
    },
    {
        id: 6, category: "Televizyon", name: "TCL 65C745 65\"", image: "product/tcl.jpg", isHome: true, isNew: true,
        prices: [
            { productId: 1, provider: "Trendyol", price: 44200, image: "provider/trendyol.jpg" },
            { productId: 1, provider: "Hepsiburada", price: 44300, image: "provider/hepsiburada.jpg" },
            { productId: 1, provider: "N11", price: 44500, image: "provider/n11.jpg" }],
        attributes: [{ key: "Çözünürlük", value: "4K" }, { key: "Görüntü Teknolojisi", value: "QLED" }, { key: "Derinlik", value: "314" }]
    },
    {
        id: 7, category: "Telefon", name: "iPhone 13 Pro", image: "product/iPhone13pro.jpg", isHome: true, isNew: true,
        prices: [
            { productId: 1, provider: "Trendyol", price: 68500, image: "provider/trendyol.jpg" },
            { productId: 1, provider: "Hepsiburada", price: 82000, image: "provider/hepsiburada.jpg" },
            { productId: 1, provider: "N11", price: 69250, image: "provider/n11.jpg" }],
        attributes: [{ key: "İşlemci Hızı", value: "3,2 Ghz" }, { key: "Dahili Hafıza", value: "128 GB" }, { key: "Bellek", value: "6 GB" }, { key: "Batarya", value: "3095 mAh" }, { key: "Kamera", value: "12 mpx" }]
    },
];

module.exports = products;