import { Song } from '../types/music';

export const playlistSongs: Record<string, Song[]> = {
  // Entertainment
  '1': [
    {
      id: '1',
      title: 'Aaj Ki Raat.',
      artist: 'Sachin-Jigar',
      album: 'Stree 2',
      duration: '3:48',
      coverUrl:
        'https://imgs.search.brave.com/3G6mPO8xI8lWX9Q7JkTqICeElVfznqodMm-wKVMO8Xo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9zb25n/L2Q0MVdqbldQTHEv/MVdqOGt3UmdLUC9z/aXplX21fMTcyOTA2/MzI3Ny5qcGc',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Entertainment/Aaj+Ki+Raat+(From+%22Stree+2%22).mp3',
    },
    {
      id: '2',
      title: 'Aayi Nahi',
      artist: 'Sachin-Jigar,Pawan Singh',
      album: 'Stree 2',
      duration: '2:58',
      coverUrl:
        'https://imgs.search.brave.com/pmSs9o-0nJtFWPtXIL2mTnNuOyBBcMwBHuWnaN4P0IM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS8y/NTYvQWF5aS1OYWkt/RnJvbS1TdHJlZS0y/LUhpbmRpLTIwMjQt/MjAyNDA4MDUxNTM4/MzUtNTAweDUwMC5q/cGc',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Entertainment/Aayi+Nai+(From+%22Stree+2%22).mp3',
    },
    {
      id: '3',
      title: 'IIuminati',
      artist: 'Sushin Shyam ',
      album: 'Aavesham',
      duration: '2:58',
      coverUrl:
        'https://imgs.search.brave.com/Ho-We9ZeShJPiArgtPBMrVcx5TAXlni60t7X9dTYbJo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYWdh/bGx3b3JsZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzA1L0lsbHVtaW5h/dGktQWF2ZXNoYW0u/anBn',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Entertainment/Illuminati.mp3',
    },
    {
      id: '4',
      title: 'Rowdy Baby',
      artist: 'Yuvan Shankar Raja',
      album: 'Maari 2 ',
      duration: '4:41',
      coverUrl:
        'https://imgs.search.brave.com/V5NmhwnJFO8ihiIaV3vlDg9N8LFd1IP6SxwdVcUqpoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pc2Fp/bWluaXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEy/L1Jvd2R5LUJhYnku/anBn',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Entertainment/Rowdy+Baby.mp3',
    },
    {
      id: '5',
      title: 'The Disco Song',
      artist: 'Vishal-Shekar',
      album: 'The Student of the Year',
      duration: '5:42',
      coverUrl:
        'https://imgs.search.brave.com/OU_9n-_aOQgILE0dfVTWYhUfEryNs8H0BaEyMLKk0TY/rs:fit:200:200:1:0/g:ce/aHR0cHM6Ly93d3cu/cGFnYWx3b3JsZC5v/bmxpbmUvR3BFMzRL/ZzlHcS83MzQ2L3Ro/dW1iLXN0dWRlbnQt/b2YtdGhlLXllYXIt/MjAxMi0yMDAtMjAw/LmpwZw',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Entertainment/The+Disco+Song.mp3',
    },
  ],
  // Feel Good
  '2': [
    {
      id: '1',
      title: 'Khairiyat',
      artist: 'Arijit Singh.',
      album: 'Chhichhore',
      duration: '4:40',
      coverUrl:
        'https://imgs.search.brave.com/pFNQufNV_LGVytYR2TXDd2RUeTp8FFADuTfvCQKRf3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS85/MzcvQ2hoaWNoaG9y/ZS1IaW5kaS0yMDE5/LTIwMTkwOTA0MTA0/MDIzLTUwMHg1MDAu/anBn',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Feel+good/Khairiyat.mp3',
    },
    {
      id: '2',
      title: 'Maan Meri Jaan',
      artist: 'King',
      album: 'Maan Meri Jaan',
      duration: '3:14',
      coverUrl:
        'https://imgs.search.brave.com/HR_0DIonR7m19ft0W6V6KUTFZt4xCo9F7-KLW4iXU7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZGl0cmFja3Mu/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDEvbWFhbi1t/ZXJpLWphYW4tbHly/aWNzLmpwZw',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Feel+good/Maan+Meri+Jaan.mp3',
    },
    {
      id: '3',
      title: 'Mere Rang Mein Rangne Wali',
      artist: 'S. P. Balasubrahmanyam',
      album: 'Maine Pyar Kiya',
      duration: '6:54',
      coverUrl:
        'https://imgs.search.brave.com/GG8Igidlp0XWuTHeI-BIz7YX4djUroPFXL-LC85ErqI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS81/MjQvTWFpbmUtUHlh/ci1LaXlhLUhpbmRp/LTE5ODktMjAxOTA1/MzExNTQ3MzEtNTAw/eDUwMC5qcGc',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Feel+good/Mere+Rang+Mein+Rangne+Wali.mp3',
    },
    {
      id: '4',
      title: 'Tere Liye',
      artist: 'Arijit Singh.',
      album: 'Prince',
      duration: '4:39',
      coverUrl:
        'https://imgs.search.brave.com/610eis1ZlApmjR9skW_FqGj-FDu4Idu_jIrJssegY9A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvcWE0V0VxcVdQ/MS9hNFdFMWd2ZVdQ/L3NpemVfbV8xNzEz/ODgxNjY1LmpwZw',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Feel+good/Tere+Liye.mp3',
    },
    {
      id: '5',
      title: 'Tum Hi Ho',
      artist: 'Arijit Singh.',
      album: 'Aashiqui 2',
      duration: '4:22',
      coverUrl:
        'https://imgs.search.brave.com/gC-me84odiy_00gfQyqmH9l5Nza_zDhSVgXTp0HggFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS80/MzAvQWFzaGlxdWkt/Mi1IaW5kaS0yMDEz/LTUwMHg1MDAuanBn',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Feel+good/Tum+Hi+Ho.mp3',
    },
  ],
  // Soothing English
  '3': [
    {
      id: '1',
      title: 'Night Changes',
      artist: 'One Direction',
      album: 'Four',
      duration: '3:46',
      coverUrl:
        'https://imgs.search.brave.com/NGPqCzj-VOGqalb1jr5aptOiuwxL6JJcEYDzbo4odZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNj/ZG4uY28vaW1hZ2Uv/YWI2NzYxNmQwMDAw/MWUwMmQzMDRiYTJk/NzFkZTMwNjgxMmVl/YmFmNA',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/English+/Night+Changes.mp3',
    },
    {
      id: '2',
      title: 'Closer',
      artist: ' The Chainsmokers',
      album: 'Closer',
      duration: '4:05',
      coverUrl:
        'https://imgs.search.brave.com/6svLRMBpuuBBGTPbUVbXYrQWXkAmRSC_1X7vmH1A508/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmlsbGJvYXJkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvbWVk/aWEvVGhlLWNoYWlu/c21va2Vycy1mdC1o/YWxzZXktY2xvc2Vy/LTIwMTYtc2NyZWVu/c2hvdC1iaWxsYm9h/cmQtMTU0OC5qcGc_/dz05NDImaD02MjMm/Y3JvcD0x',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/English+/Closer.mp3',
    },
    {
      id: '3',
      title: 'Cruel Summer',
      artist: 'Taylor Swift',
      album: 'Lover',
      duration: '2:58',
      coverUrl:
        'https://imgs.search.brave.com/H2WBnAAprVbjXbRHLWsA__XGekiYeT0tkLg-edMhWBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YXls/b3Jzd2lmdHN3aXR6/ZXJsYW5kLmNoL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA4/L2FsYnVtY292ZXJh/cnQtMS5qcGc',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/English+/Cruel+Summer.mp3',
    },
    {
      id: '4',
      title: 'Let Her Go',
      artist: 'Passenger',
      album: 'All the little lights',
      duration: '4:12',
      coverUrl:
        'https://imgs.search.brave.com/xJkUT1yh-R4VpNFcDySizVPs_BaOGxybsDoc5cEiEnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYXNz/ZW5nZXJtdXNpYy5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvTEhH/LXNxLmpwZz92PTE3/MDA0MTI1NzYmd2lk/dGg9MTEwMA',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/English+/Let+Her+Go.mp3',
    },
    {
      id: '5',
      title: 'August',
      artist: 'Taylor Swift',
      album: 'Lover',
      duration: '4:21',
      coverUrl:
        'https://imgs.search.brave.com/GrtyR0Jk9_T1n_Tpif_7ECXkU5NpptZI04HFuZlKGww/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmlsbGJvYXJkLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvbWVk/aWEvdGF5bG9yLXN3/aWZ0LTY1MC00MzAt/MS5qcGc_dz02NTAm/aD00MzAmY3JvcD0x',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/English+/august.mp3',
    },
  ],

  // Romance
  '4': [
    {
      id: '1',
      title: 'Ae Dil Hai Mushkil',
      artist: 'Arijit Singh.',
      album: 'Ae Dil Hai Mushkil',
      duration: '4:29',
      coverUrl:
        'https://imgs.search.brave.com/z28sZxGy3yluZ8bo_xRG75oK4lUaRrD4ZUjV2uiinro/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMva29NV1E0QjNx/TC9vTVdRTzVMWEtx/L3NpemVfbS5qcGc',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Ae+Dil+Hai+Mushkil+Title+Track.mp3',
    },
    {
      id: '2',
      title: 'Humdard',
      artist: 'Arijit Singh.',
      album: 'Ek Villian',
      duration: '4:20',
      coverUrl:
        'https://imgs.search.brave.com/oEKBykTL1c4shxIjgqN2HCQQRxg1abxYJ7djFjZ5MCU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvTk9YV1ZSZ1dr/cS9PWFdWVk83MFdr/L3NpemVfbS5qcGc',
      audioUrl: 'https://awssong.s3.ap-southeast-1.amazonaws.com/Humdard.mp3',
    },
    {
      id: '3',
      title: 'Love Me Like You Do - From "Fifty Shades Of Grey"',
      artist: 'Ellie Goulding',
      album: 'Fifty Shades of Gray',
      duration: '4:10',
      coverUrl:
        'https://imgs.search.brave.com/P1SzRGOxbuc_57StWJg3TMgojxZOU0A-MO5eIkJO8LE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvNFo5YnFnbzN5/US9aOWJxbzZhRDN5/L3NpemVfbS5qcGc',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Romance/Love+Me+Like+You+Do+-+From+%22Fifty+Shades+Of+Grey%22.mp3',
    },
    {
      id: '4',
      title: 'Tera Ban Jaunga',
      artist: 'Akhil Sachdeva',
      album: 'Kabir Singh',
      duration: '3:56',
      coverUrl:
        'https://imgs.search.brave.com/ononYbtdjs8eobUo7SKh6w8v1vhcnnLMrzIE2erYWBk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS84/MDcvS2FiaXItU2lu/Z2gtSGluZGktMjAx/OS0yMDI0MDEzMTEz/MTAwMy01MDB4NTAw/LmpwZw',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Romance/Tera+Ban+Jaunga.mp3',
    },
    {
      id: '5',
      title: 'Sunn Raha Hai (Male Version)',
      artist: 'Ankit Tiwari',
      album: 'Aashiqui 2',
      duration: '6:30',
      coverUrl:
        'https://imgs.search.brave.com/gC-me84odiy_00gfQyqmH9l5Nza_zDhSVgXTp0HggFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS80/MzAvQWFzaGlxdWkt/Mi1IaW5kaS0yMDEz/LTUwMHg1MDAuanBn',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Romance/Sunn+Raha+Hai+(Male+Version).mp3',
    },
  ],

  // Kannada Melody
  '5': [
    {
      id: '1',
      title: 'Anisuthide',
      artist: 'Sonu Nigam',
      album: 'Mungaru Male',
      duration: '4:36',
      coverUrl:
        'https://imgs.search.brave.com/T1MVbZR21ErDWfee-foIeWe6rLOB4OVTgJyNSRTdsos/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS8y/MDAvTXVuZ2FydS1N/YWxlLUthbm5hZGEt/MjAwNi01MDB4NTAw/LmpwZw',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Kannada+Melody/Anisuthide.mp3',
    },
    {
      id: '2',
      title: 'Ninnidale',
      artist: 'Sonu Nigam',
      album: 'Milana',
      duration: '4:49',
      coverUrl: 'https://c.saavncdn.com/316/Milana-Kannada-2007-500x500.jpg',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Kannada+Melody/Ninnidale.mp3',
    },
    {
      id: '3',
      title: 'Ondu Malebillu',
      artist: ' Armaan Malik',
      album: 'Chakravarthy',
      duration: '4:42',
      coverUrl:
        'https://c.saavncdn.com/493/Chakravarthy-Kannada-2017-20171218-500x500.jpg',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Kannada+Melody/Ondu+Malebillu.mp3',
    },
    {
      id: '4',
      title: 'Paravashanadenu',
      artist: 'Sonu Nigam',
      album: 'Paramathma',
      duration: '3:55',
      coverUrl:
        'https://c.saavncdn.com/815/Paramathma-Kannada-2019-20191031125126-500x500.jpg',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Kannada+Melody/Paravashanadenu.mp3',
    },
    {
      id: '5',
      title: 'Sariyaagi',
      artist: 'Sonu Nigam',
      album: 'Mungaru Male 2',
      duration: '4:21',
      coverUrl:
        'https://c.saavncdn.com/426/Sariyaagi-Kannada-2019-20230619190501-500x500.jpg',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Kannada+Melody/Sariyaagi.mp3',
    },
  ],
  // Daily Mix 1
  '6': [
    {
      id: '1',
      title: 'Aayi Nahi',
      artist: 'Sachin-Jigar,Pawan Singh',
      album: 'Stree 2',
      duration: '2:58',
      coverUrl:
        'https://imgs.search.brave.com/pmSs9o-0nJtFWPtXIL2mTnNuOyBBcMwBHuWnaN4P0IM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS8y/NTYvQWF5aS1OYWkt/RnJvbS1TdHJlZS0y/LUhpbmRpLTIwMjQt/MjAyNDA4MDUxNTM4/MzUtNTAweDUwMC5q/cGc',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Entertainment/Aayi+Nai+(From+%22Stree+2%22).mp3',
    },
    {
      id: '2',
      title: 'Paravashanadenu',
      artist: 'Sonu Nigam',
      album: 'Paramathma',
      duration: '3:55',
      coverUrl:
        'https://c.saavncdn.com/815/Paramathma-Kannada-2019-20191031125126-500x500.jpg',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Kannada+Melody/Paravashanadenu.mp3',
    },
    {
      id: '3',
      title: 'Love Me Like You Do - From "Fifty Shades Of Grey"',
      artist: 'Ellie Goulding',
      album: 'Fifty Shades of Gray',
      duration: '4:10',
      coverUrl:
        'https://imgs.search.brave.com/P1SzRGOxbuc_57StWJg3TMgojxZOU0A-MO5eIkJO8LE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hMTAu/Z2FhbmFjZG4uY29t/L2duX2ltZy9hbGJ1/bXMvNFo5YnFnbzN5/US9aOWJxbzZhRDN5/L3NpemVfbS5qcGc',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Romance/Love+Me+Like+You+Do+-+From+%22Fifty+Shades+Of+Grey%22.mp3',
    },
    {
      id: '4',
      title: 'Let Her Go',
      artist: 'Passenger',
      album: 'All the little lights',
      duration: '4:12',
      coverUrl:
        'https://imgs.search.brave.com/xJkUT1yh-R4VpNFcDySizVPs_BaOGxybsDoc5cEiEnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYXNz/ZW5nZXJtdXNpYy5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvTEhH/LXNxLmpwZz92PTE3/MDA0MTI1NzYmd2lk/dGg9MTEwMA',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/English+/Let+Her+Go.mp3',
    },
    {
      id: '5',
      title: 'Rowdy Baby',
      artist: 'Yuvan Shankar Raja',
      album: 'Maari 2 ',
      duration: '4:41',
      coverUrl:
        'https://imgs.search.brave.com/V5NmhwnJFO8ihiIaV3vlDg9N8LFd1IP6SxwdVcUqpoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pc2Fp/bWluaXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzEy/L1Jvd2R5LUJhYnku/anBn',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Entertainment/Rowdy+Baby.mp3',
    },
  ],
  // Chill Vibes
  '7': [
    {
      id: '1',
      title: 'Let Her Go',
      artist: 'Passenger',
      album: 'All the little lights',
      duration: '4:12',
      coverUrl:
        'https://imgs.search.brave.com/xJkUT1yh-R4VpNFcDySizVPs_BaOGxybsDoc5cEiEnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYXNz/ZW5nZXJtdXNpYy5j/b20vY2RuL3Nob3Av/YXJ0aWNsZXMvTEhH/LXNxLmpwZz92PTE3/MDA0MTI1NzYmd2lk/dGg9MTEwMA',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/English+/Let+Her+Go.mp3',
    },
    {
      id: '2',
      title: 'Ninnidale',
      artist: 'Sonu Nigam',
      album: 'Milana',
      duration: '4:49',
      coverUrl: 'https://c.saavncdn.com/316/Milana-Kannada-2007-500x500.jpg',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Kannada+Melody/Ninnidale.mp3',
    },
    {
      id: '3',
      title: 'Khairiyat',
      artist: 'Arijit Singh.',
      album: 'Chhichhore',
      duration: '4:40',
      coverUrl:
        'https://imgs.search.brave.com/pFNQufNV_LGVytYR2TXDd2RUeTp8FFADuTfvCQKRf3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS85/MzcvQ2hoaWNoaG9y/ZS1IaW5kaS0yMDE5/LTIwMTkwOTA0MTA0/MDIzLTUwMHg1MDAu/anBn',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Feel+good/Khairiyat.mp3',
    },
    {
      id: '4',
      title: 'Night Changes',
      artist: 'One Direction',
      album: 'Four',
      duration: '3:46',
      coverUrl:
        'https://imgs.search.brave.com/NGPqCzj-VOGqalb1jr5aptOiuwxL6JJcEYDzbo4odZI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnNj/ZG4uY28vaW1hZ2Uv/YWI2NzYxNmQwMDAw/MWUwMmQzMDRiYTJk/NzFkZTMwNjgxMmVl/YmFmNA',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/English+/Night+Changes.mp3',
    },
    {
      id: '5',
      title: 'Tum Hi Ho',
      artist: 'Arijit Singh.',
      album: 'Aashiqui 2',
      duration: '4:22',
      coverUrl:
        'https://imgs.search.brave.com/gC-me84odiy_00gfQyqmH9l5Nza_zDhSVgXTp0HggFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS80/MzAvQWFzaGlxdWkt/Mi1IaW5kaS0yMDEz/LTUwMHg1MDAuanBn',
      audioUrl:
        'https://awssong.s3.ap-southeast-1.amazonaws.com/Feel+good/Tum+Hi+Ho.mp3',
    },
  ],
};
