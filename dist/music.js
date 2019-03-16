const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    // http://www.ytmp3.cn/down/51156.mp3url: "http://m10.music.126.net/20190316160109/9d65ace8467d3bba6378e25dcdcf13f6/ymusic/0a85/8d5c/fc3c/2dabfe494a2fbfb7a91908f022b32f27.mp3"
    audio: [
      {
        name: "如果当时",
        artist: '许嵩',
        url: 'http://m10.music.126.net/20190316160109/9d65ace8467d3bba6378e25dcdcf13f6/ymusic/0a85/8d5c/fc3c/2dabfe494a2fbfb7a91908f022b32f27.mp3',
        cover: 'https://p2.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg?param=130y130',
      },
      {
        name: "柳成荫",
        artist: '许嵩',
        url: 'http://www.ytmp3.cn/down/49660.mp3',
        cover: 'https://p1.music.126.net/BUFZLieG5a6E3ZVpkHP6fA==/109951163402069754.jpg?param=130y130',
      },
      {
        name: "粉色信笺",
        artist: '许嵩',
        url: 'http://www.ytmp3.cn/down/51156.mp3',
        cover: 'https://p1.music.126.net/6TdPczlSi8HPrhPnUxHyBg==/86861418607064.jpg?param=130y130',
      },
      // {
      //   name: "暗涌",
      //   artist: '王菲',
      //   url: 'http://www.ytmp3.cn/down/52980.mp3',
      //   cover: 'http://p1.music.126.net/w8RFsMH8VJfPsBmVudYGsA==/109951163020569833.jpg?param=130y130',
      // },
      {
        name: 'Wonderful U',
        artist: 'AGA',
        url: 'http://www.ytmp3.cn/down/51181.mp3',
        cover: 'http://p1.music.126.net/Blb_Gi0AJTWIEBLr189F4A==/18791753232142320.jpg?param=130y130',
      },
      {
        name: '浮夸',
        artist: '陈奕迅',
        url: 'http://www.ytmp3.cn/down/49639.mp3',
        cover: 'http://p1.music.126.net/Bl1hEdJbMSj5YJsTqUjr-w==/109951163520311175.jpg?param=130y130',
      }
    ]
});