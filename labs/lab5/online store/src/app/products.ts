export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imgaddress: string;
  rating:number;
  gallery: string[];
  link:string;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone 13',
    price: 376000,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR',
    imgaddress: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h42/hed/46392661704734/apple-iphone-13-128gb-sinij-102298364-1-Container.jpg',
    rating: 5,
    gallery: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/hd0/46392661901342/apple-iphone-13-128gb-sinij-102298364-2-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h96/46392662097950/apple-iphone-13-128gb-sinij-102298364-3-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h23/h52/46392662294558/apple-iphone-13-128gb-sinij-102298364-4-Container.jpg'
    ],
    link:'https://kaspi.kz/shop/p/apple-iphone-13-128gb-sinii-102298364/?c=750000000',
    category : "Phone",
    likes: 1
  },
  {
    id: 2,
    name: 'Phone 11',
    price: 292500,
    description: 'Функциональный и стильный смартфон Apple iPhone 11',
    imgaddress: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h2e/31489167622174/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg',
    rating: 5,
    gallery: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h97/h4e/31489168408606/apple-iphone-11-128gb-slim-box-cernyj-100692388-2-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h6a/31489169326110/apple-iphone-11-128gb-slim-box-cernyj-100692388-3-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdc/hf4/31489170472990/apple-iphone-11-128gb-slim-box-cernyj-100692388-4-Container.jpg'
    ],
    link:'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item',
    category : "Phone",
    likes: 1
  },
  {
    id: 3,
    name: 'iPhone 14',
    price: 420000,
    description: 'Cистемa iOS 16 и процессора Apple A15 Bionic',
    imgaddress: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/h05/63072540098590/apple-iphone-14-128gb-cernyj-106363023-1.jpg',
    rating: 5,
    gallery: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h66/63072540327966/apple-iphone-14-128gb-cernyj-106363023-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6a/h3a/63075491446814/apple-iphone-14-128gb-cernyj-106363023-3.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h70/hbb/63075491676190/apple-iphone-14-128gb-cernyj-106363023-4.jpg'
    ],
    link:'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
    category : "Phone",
    likes: 1
  },
  {
    id: 4,
    name: 'iPhone 14 Pro',
    price: 637700,
    description: 'OLED-дисплей диагональю 6,1 дюйма и разрешением 2556 × 1179 точек',
    imgaddress: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/hd8/62948780081182/apple-iphone-14-pro-max-128gb-fioletovyj-106363303-1.jpg',
    rating: 5,
    gallery: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbd/h6c/62948780310558/apple-iphone-14-pro-max-128gb-fioletovyj-106363303-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1b/h91/63073994702878/apple-iphone-14-pro-max-128gb-fioletovyj-106363303-3.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h95/h37/63073994932254/apple-iphone-14-pro-max-128gb-fioletovyj-106363303-4.jpg'
    ],
    link:'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=750000000',
    category : "Phone",
    likes: 1
  },
  {
    id: 5,
    name: 'iPhone 14 Pro Max',
    price: 687444,
    description: 'OLED, Super Retina XDR display с возможностью постоянной работы',
    imgaddress: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/hb3/63073422966814/apple-iphone-14-pro-max-128gb-cernyj-106363289-1.jpg',
    rating: 5,
    gallery: [
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd0/hef/63073423392798/apple-iphone-14-pro-max-128gb-cernyj-106363289-2.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9b/ha2/63073423949854/apple-iphone-14-pro-max-128gb-cernyj-106363289-3.jpg',
      'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb7/h46/63073424441374/apple-iphone-14-pro-max-128gb-cernyj-106363289-4.jpg'
    ],
    link:'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000',
    category : "Phone",
    likes: 1
  },

  {
    id: 6,
    name: 'iPhone 12',
    price: 374700,
    description: 'Яркий дисплей OLED. Мощный чип. И система двух камер',
    imgaddress: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he9/h2e/33282180907038/apple-iphone-12-128gb-belyj-100656959-1-Container.jpg',
    rating: 5,
    gallery: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc6/hce/33282185297950/apple-iphone-12-128gb-belyj-100656959-2-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h44/h54/33282190082078/apple-iphone-12-128gb-belyj-100656959-3-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h12/he2/33282194440222/apple-iphone-12-128gb-belyj-100656959-4-Container.jpg'
    ],
    link:'https://kaspi.kz/shop/p/apple-iphone-12-128gb-belyi-100656959/?c=750000000',
    category : "Phone",
    likes: 1
  },

  {
    id:7,
    name:'iPhone 14 Plus',
    price:480500,
    description:'Смартфон iPhone 14 Plus технически почти не отличается от iPhone 14',
    imgaddress:'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/h2c/63073066909726/apple-iphone-14-plus-128gb-cernyj-106363170-1.jpg',
    rating: 5,
    gallery: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb9/hd3/63073067204638/apple-iphone-14-plus-128gb-cernyj-106363170-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/hb8/63075486400542/apple-iphone-14-plus-128gb-cernyj-106363170-3.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8e/h55/63075486629918/apple-iphone-14-plus-128gb-cernyj-106363170-4.jpg'
    ],
    link:'https://kaspi.kz/shop/p/apple-iphone-14-plus-128gb-chernyi-106363170/?c=750000000',
    category : "Phone",
    likes: 1
  },

  {
    id:8,
    name:'iPhone 12 mini',
    price: 294830,
    description: 'Apple iPhone 12 mini отличается новым элегантным дизайном без закругления граней',
    imgaddress: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h20/33277048422430/apple-iphone-12-mini-64gb-cernyj-100657220-1-Container.jpg',
    rating: 5,
    gallery: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h81/he8/33277054222366/apple-iphone-12-mini-64gb-cernyj-100657220-2-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h8a/33277059694622/apple-iphone-12-mini-64gb-cernyj-100657220-3-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/h60/33277064019998/apple-iphone-12-mini-64gb-cernyj-100657220-4-Container.jpg'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-mini-64gb-krasnyi-100657851/?c=750000000',
    category : "Phone",
    likes: 1
  },

  {
    id:9,
    name:'iPhone SE',
    price: 235450,
    description: 'Apple iPhone SE 2-го поколения — мощный смартфон с процессором A13 Bionic',
    imgaddress: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h54/hb0/33080094326814/apple-iphone-se-2020-64gb-slim-box-krasnyj-100692722-1-Container.jpg',
    rating: 5,
    gallery: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/h47/33080098979870/apple-iphone-se-2020-64gb-slim-box-krasnyj-100692722-2-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h69/h4d/33080103206942/apple-iphone-se-2020-64gb-slim-box-krasnyj-100692722-3-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h98/hf5/33080108089374/apple-iphone-se-2020-64gb-slim-box-krasnyj-100692722-4-Container.jpg'
    ],
    link:'https://kaspi.kz/shop/p/apple-iphone-se-2020-64gb-slim-box-krasnyi-100692722/?c=750000000',
    category : "Phone",
    likes: 1
  },

  {
    id:10,
    name:'iPhone 12 mini',
    price: 325707,
    description: 'Использующий процессор Apple A12 Bionic который содержит 7 миллиардов',
    imgaddress: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/he3/33279999180830/apple-iphone-12-mini-64gb-krasnyj-100657851-1-Container.jpg',
    rating: 4,
    gallery:[
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1d/h4b/33280003932190/apple-iphone-12-mini-64gb-krasnyj-100657851-2-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/ha4/33280008716318/apple-iphone-12-mini-64gb-krasnyj-100657851-3-Container.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/hae/33280013402142/apple-iphone-12-mini-64gb-krasnyj-100657851-4-Container.jpg'
    ],
    link:'https://kaspi.kz/shop/p/apple-iphone-12-mini-64gb-krasnyi-100657851/?c=750000000',
    category : "Phone",
    likes: 1
  },

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/