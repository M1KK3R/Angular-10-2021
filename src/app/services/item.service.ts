import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsInService: Item[] = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/O0oAAOSwLxJhVgYv/s-l225.webp","title":"Sony WH-1000XM4 Over the Ear Noise Cancelling Wireless Headphones","price":252,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/2n4AAOSwS31hZv1P/s-l225.webp","title":"Sony Playstation 5 Disc Version Video Game Console","price":849,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/k6YAAOSwF0RgA4ku/s-l225.webp","title":"Sony PlayStation Plus PS 12 Month 1 Year Membership Subscription – USA","price":43.99,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SDcAAOSwcChhb-VR/s-l225.webp","title":"New Listing🎮 Sony PlayStation PS5 Digital Edition Console ✅BRAND NEW ✅NEXT DAY DELIVERY 🚚","price":827.9,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qmkAAOSwy0dhb-PF/s-l225.webp","title":"New Listing🎮Sony PlayStation PS5 Digital Edition Console ✅ BRAND NEW ✅NEXT DAY DELIVERY 🚚222","price":827.84,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/oasAAOSwfG5hcAHl/s-l225.webp","title":"New ListingSony WH-1000XM3 Over the Ear Wireless Headphones - Black","price":55.19,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Z2cAAOSwKgRg0-oq/s-l225.webp","title":"Sony PlayStation 5 Digital Edition Console PS5 - NEW - IN HAND FAST SHIPPING! ✅","price":888,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/obUAAOSw6S1hbsfZ/s-l225.webp","title":"Sony PlayStation Vita PCH 2000 WiFi Neon orange Games 8GB Memory card ","price":149.98,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5bEAAOSwMlhhcChz/s-l225.webp","title":"New ListingSony PlayStation 4 (PS4) - 500 GB Black Console ","price":111.11,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/V0gAAOSwCh1gMAek/s-l225.webp","title":"Various Sony Playstation 3 Console Games Games PS3 | with Multi-DISCOUNT","price":23.17,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ySYAAOSwlmxdXMXw/s-l225.webp","title":"BRAND NEW Sony PlayStation 2 Slim Console Black PS2 System Game (NTSC)","price":398.99,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/6Z8AAOSwH4FhcBKo/s-l225.webp","title":"New ListingSony 70-200mm F2.8 G SSM II","price":896.63,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/lZQAAOSwFVhhcCfB/s-l225.webp","title":"New ListingSony PlayStation 4 PS4 500GB Jet Black Console with Controller","price":1.37,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/nawAAOSwyuhhCeUs/s-l225.webp","title":"SONY PS Vita PCH-1000  1100 Black Model OLED Wi-Fi w/Box Mint Condition","price":189.99,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ZaEAAOSwG8ZfmZ2m/s-l225.webp","title":"PS Vita PCH-2000 Sony Playstation Console only Various colors Used【Good】","price":184.99,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/f0cAAOSwpGpgr~qf/s-l225.webp","title":"Sony WF-1000XM3 Wireless Noise Cancelling Headphones - Black","price":45,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3zoAAOSwojRgM9Vj/s-l225.webp","title":"SONY PLAYSTATION 5 (PS5) CONSOLE  (DISC)- BRAND NEW - IN HAND - FAST SHIPPING!","price":899.99,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-pQAAOSwrbphZ~7~/s-l225.webp","title":"New ListingSony NEX 6 body black - top condition!","price":168.85,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/2QwAAOSwrJxhTZtE/s-l225.webp","title":"Sony Xperia X (F5121) 32 GB Single-Sim Black Neuwertig vom Händler","price":87.22,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/13IAAOSwBV9hb-dd/s-l225.webp","title":" Sony Playstation (PS5) Disc Edition🎮 Brand New & Sealed📦Free Delivery","price":827.91,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/X5cAAOSw6yZhbsag/s-l225.webp","title":"Sony PlayStation Vita PCH 2000 WiFi Metallic red 16GB Memory card Safety case","price":149.98,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Tc4AAOSwo4hhb~3w/s-l225.webp","title":"New ListingSony Playstation Mini (Ps1) Console Bundle & 12 games PAL FAST POST","price":41.4,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/liMAAOSwIMlhbrx8/s-l225.webp","title":"New ListingSony Playstation 4 Console Slim","price":221.25,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/g1AAAOSwEQRhImau/s-l225.webp","title":"New ListingSony PS4 Pro 1TB Console Death Stranding Limited Edition *MINT*","price":371.18,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/G3gAAOSwxqthb-bw/s-l225.webp","title":"New ListingSony Alpha 9","price":3027.57,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WbkAAOSwlPBhbS8e/s-l225.webp","title":"SONY PCH-1103 PS VITA HANDHELD CONSOLE WIFI + 3G OLED SCREEN RARE SORT AFTER.","price":131.02,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wKwAAOSw6Hhgs3SC/s-l225.webp","title":"New ListingSony sel E 50 mm f1, 8 full frame","price":174.67,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mhAAAOSwYOxhb84h/s-l225.webp","title":"(RD) Sony PS4 Wireless Controller Gamepad-Dualshock 4-Drifting/ghosting","price":34.88,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/e1MAAOSw-R5hE7nz/s-l225.webp","title":"[Mint] SONY PS Vita PCH-1000 / 1100 White OLED Wi-Fi w/ Box and Charger","price":199.99,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5u0AAOSwZDNhUhbq/s-l225.webp","title":"Sony playstation 5 digital new","price":744.08,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Uf0AAOSwJ49gZLct/s-l225.webp","title":"New Listing🔥Sony Playstation PS5 - DIGITAL EDITION BRAND NEW ✅ IN HAND ✅ SHIPS NOW!!! 🚚","price":779.99,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/glQAAOSww2phKCZY/s-l225.webp","title":"SONY PS Vita PlayStation Vita 8GB Memory Card \"Excellent\" FROM JAPAN JP USED ","price":11.89,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/BFYAAOSwEnthSznH/s-l225.webp","title":"New ListingPs1 Sony Playstation 1 working","price":27.95,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Gb4AAOSwPrdhcCIi/s-l225.webp","title":"New ListingSony Alpha a7 III LOW SHUTTER 24.2MP Mirrorless Digital Camera (Body Only)","price":1500,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/F7AAAOSwP31hbED5/s-l225.webp","title":"New ListingSONY PlayStation 5 PS5 DIGITAL EDITION CONSOLE SEALED - IN HAND - SHIPS FAST🔥🔥","price":799,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/HwoAAOSwpCJhP3-t/s-l225.webp","title":"New ListingSony Xperia 1 - 128GB - Grey - Unlocked - Grade A Condition","price":14.54,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/E2UAAOSwAHhhb-tm/s-l225.webp","title":"New ListingSony PS5 Digital Edition Games Console-White","price":756.88,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/GiMAAOSw~Nthb-d~/s-l225.webp","title":"New ListingSony PlayStation 2 Satin Silver Console - Boxed 2 Controllers + 10 Games ","price":172.48,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3P0AAOSwQndgMCnk/s-l225.webp","title":"Sony UBP-X700 4K Ultra HD Blu-ray Player (2018 Model)","price":120,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/dd8AAOSwM5FhcCUI/s-l225.webp","title":"New ListingNEW Sony PlayStation PS4 1TB Slim Gaming Console Black - CUH-2215B","price":457.99,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/QlgAAOSwnxxhby~d/s-l225.webp","title":"New ListingSony PS One PS1 White Console SCPH-101 InterAct LCD Screen Tested Controller","price":189.99,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7moAAOSw4ddhV0bZ/s-l225.webp","title":"Sony SEL 16-50mm f/3.5-5.6 PZ OSS Lens Excellent Compact Lens.","price":87.84,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3tUAAOSwEn1haCuX/s-l225.webp","title":"New ListingSony Playstation 4 Slim 500gb and FIFA 21 – Black (used)","price":163.02,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/M8QAAOSwx15hb~8J/s-l225.webp","title":"New ListingSony Playstation 4 Pro 1TB Game Console - Black - Unboxed (READ DESCRIPTION)","price":136.61,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0g0AAOSwKmFhcBhL/s-l225.webp","title":"New ListingSony PlayStation 4 500GB White Console with one DualShock 4 Controller spiderman","price":179.38,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/NNsAAOSwl8Rf0p25/s-l225.webp","title":"Sony Playstation PS5 Disk Drive NEW","price":838.39,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/dQwAAOSwjPFhcCTI/s-l225.webp","title":"New ListingSony Playstation 4 Pro 1TB Console-Black","price":1.16,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/MyAAAOSwBeNhC07V/s-l225.webp","title":"SALE Sony Alpha a7R III Mirrorless Digital Camera Body Only ILCE7RM3A New Model","price":2247.78,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Oq0AAOSwWMVhbhwP/s-l225.webp","title":"New ListingSony PlayStation PS1 Gray Console 2 Systems with games/memory card ","price":79.95,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/DOwAAOSwGhhhb6bm/s-l225.webp","title":"New ListingSony PlayStation 3 PS3 CECHK01 Black Fat Console -3 Controllers & Cables","price":13.5,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/1QgAAOSwaShhXOX2/s-l225.webp","title":"Sony PlayStation 4 SLIM 500GB Jet Black Console TESTED & CLEANED ","price":242.78,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/oToAAOSwv11hb~YI/s-l225.webp","title":"Sony PS Blu-ray Disc Edition Console-Disc Warranty 24 months 5","price":22.12,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/r4gAAOSwFBhhcBWT/s-l225.webp","title":"New ListingSony PlayStation 4 Console 500GB - Jet Black (controller and cables included)","price":20.5,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/p-wAAOSwNyFhY2Ys/s-l225.webp","title":"New ListingSony PlayStation 4 Slim 500GB Black Console","price":185,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kdcAAOSwigthRKoX/s-l225.webp","title":"New ListingSony PS5 Digital Edition Console - White ( Brand New ) Sealed","price":759,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/d1UAAOSwm0tfx~uV/s-l225.webp","title":"PS5 Sony PlayStation 5 Console Disc Version BRAND NEW SHIPS TODAY UPS EXPEDITED","price":1092.53,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/thkAAOSwBolgueMt/s-l225.webp","title":"Sony Xperia 10 III 5G XQ-BT52 6 128GB Blue ship from EU","price":482.7,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/UcQAAOSwX1Vggaqc/s-l225.webp","title":"NEW OEM Battery for PSP-S110 Sony PSP-2000 PSP-3000 Lite Slim 1200mAh","price":14.95,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5uMAAOSwl~1hcANi/s-l225.webp","title":"Sony PlayStation 5 Disc Edition| New & Sealed | Next Day UPS🚚 Trusted Seller ⭐️","price":936.92,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/y-IAAOSwjdBf9r4K/s-l225.webp","title":"6000mAh 4000mAh Sony Für Dyson V6 Akku SV03 SV09 DC74 DC62 DC61 DC59 DC58 Vakuum","price":54.72,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3xMAAOSwl4thZ5ey/s-l225.webp","title":"Controller FOR SONY PLAYSTATION 2 PS2 Black New In Box NOT OEM","price":24,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SJAAAOSwBzxhcBhd/s-l225.webp","title":"🔥 Sony PlayStation 5 Digital Edition Console - New ✅- Free Tracked Delivery.","price":745.11,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/z6YAAOSwZc1dndJN/s-l225.webp","title":"PS Vita Crystal White PCH 1000 ZA02 Console only Sony PSV [H]","price":118.9,"category":"sony","isActive":true},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7BEAAOSw9fxhcAbw/s-l225.webp","title":"Sony PlayStation 5 PS5 Disc Edition | TRUSTED SELLER | FREE 48HRS DELIVERY 🚛","price":944.85,"category":"sony","isActive":true}];

  constructor() { }
}
