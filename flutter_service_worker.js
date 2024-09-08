'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3e857eaec2512684e2c93c1f3cb44556",
".git/config": "90928f988c832511d8ecc76ebfcd5904",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4e536d5d7a4eca2ae9b35a109915decf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "688c753ed98285cdc77f4e2152d3e59f",
".git/logs/refs/heads/main": "688c753ed98285cdc77f4e2152d3e59f",
".git/logs/refs/remotes/origin/main": "a453bfc878fe336bb27b61cb01c33ad6",
".git/objects/06/1a238e3bd6f7d3d92708f2a1eda88c070c78f4": "103f65ba20f4de9882f145283e78157a",
".git/objects/06/4f8bf24634ca75715285994c77cbf00efd0b6a": "8e78ce532d121bc0cbf9afb43a8dc199",
".git/objects/0f/3c0b77085c7bac84ba8be8d4d4bea7073a9f9b": "0a5e5332490d4a735728a8ac56da8336",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/13/d724959e423faeae2a1a99f923684550833ea8": "9a4324d40addf665a8f7ab97cc625b07",
".git/objects/14/db9e90f262d5197dcd7d8f8e0348e97d8265dd": "863e877e5cf29414679e39fcd115698b",
".git/objects/16/252098d11e4290175645f545f55216743e0124": "5dfd84080caca7aebdd1d270821c05af",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/1087fca6508313823dbceb107eb355a47c5f2a": "42fe8af889b50913585f497448063adb",
".git/objects/19/441baa135cba09c73985788f7819c8264a85c9": "9b0ef671c2372db742f2baadd4fdbf6e",
".git/objects/1c/0bdd10f6c4f8fbc14b583c4393d324c50687cd": "cba42e5ae23f5c7b1c7085f2a92f4613",
".git/objects/1c/3b8253c0df762cf3630a5288cee8bf76beb9fa": "4975a1be0722de62eaa5e17d649d97f5",
".git/objects/1e/070c81deaa36a81e89420c3ca6f9ce63773179": "ccb8eca6f438ca72afec07b7c1ab8428",
".git/objects/1f/0672cf63e5593d8fe57c7f032ea43d806451b0": "9f25d4458db58b488e26bf78a4ddbdae",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/9c68212893d8ae2905e10cbcd7c9ee196049e0": "786b0aba71d0f12dd14b62c522525357",
".git/objects/24/2a9082c96db0f91af22ab5d5fad031c5662bd9": "729c496bd54e09a5b9b63a4ce3d4eacd",
".git/objects/24/673ea8ed47092eaecd071f4a2eda558e67e06b": "7734ae4fb95491279e9a3a384cd65fcb",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/55f3861fc10ef7c441ad0d0ccefd3b600c4f28": "6b03da918f3e54b63cea5053e714f87a",
".git/objects/28/21078bd74457fa15aa0d62acb34831c6ae316a": "9d48da6d64a276851f7639e319e2032d",
".git/objects/28/7c3af9e3d2ee378246879e0ce0dcb420ebdcbf": "3332c23bc01c9b751aea3d8469a4084d",
".git/objects/2f/03d4b2d644784a470db2f316eb9ab726674bf5": "c35b3170212834c646866cf2f60f7c8e",
".git/objects/2f/5b76519318d100d3476f87834e4bb85cdfdce6": "f7df40c9c5c813f2e07066e85d75865f",
".git/objects/30/d58a2e5dcc6a3ad47c3eeb004001fc1275d710": "257d1e495a17a3a79b065dd034e8c3b5",
".git/objects/32/0a5b65a5d0a493287a9edfc10b1600a340309c": "dc0beefd5bd8e020f7847b49b676f29a",
".git/objects/33/9a7b5e3ce26274249e8a4f1a02087999f9ec74": "c72f457ff07611e844b7f872b4f74566",
".git/objects/36/fc37b32ba4e7e473564dd04fde7a8c137a6625": "1ec70edb443837c235966bb0d8ad9d4f",
".git/objects/38/3bd06d9d0f7f40815efdbf896cf0f5892a8e85": "ca3705bf0797daada83acba4a29df7d8",
".git/objects/40/4aed2923ffbb8f569b0e93e9c4fba365ba064c": "aa4d77b63234a0550e24259419180f56",
".git/objects/46/3d66302675131e54232f740a70d551a07de90a": "fc089be360b02ed393959ed1954a2634",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/8c309fd394d85234fcadb028cf6a838917f41f": "9b9318e5e2143b70f284534faf8960c3",
".git/objects/4a/a8b35967b5ab9e859aa6ce654cbed4ff7d7d5e": "1c3e6c0ad4c031c1b4bbcff617359ffd",
".git/objects/4b/f7bd0a77b3b037b0caf0b68f3ebd4d595f12a1": "b386d15d1b1c81d9066cf076ec20817b",
".git/objects/4d/6832598b775cc664c0c89b4cd9f21c8e4fba65": "6f855a496be18f489c5f76aecfc674b9",
".git/objects/4f/155abf21559e3aed87acf311a9a9d326734676": "17a1de04fc9cdbf0d0f3b39bc1a43847",
".git/objects/50/5ff8887bc90270b4083f97b8718237b1630fbe": "c556e4fceb74ca689a90c6d4293606d3",
".git/objects/51/b4ae7cf87886d790e7917045e14a2d5c5e4371": "d1b7e9e37d452479d122242ee4e91dfb",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/45404c5c4b79b829434d9531f30aa5bf066daf": "2895ef0f87d7bddd50d8949c4d1ec812",
".git/objects/5a/9830f20dcf5f82eef8cd87679fb35666cb730c": "f9aee4653bdef64501f83b0b3ce4226f",
".git/objects/60/1e321d2ea8393e2c2a525186d933935555c544": "23c3d1a69a737e5da8e3f95a8d2c1c88",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/66/629816f1e4978b9438379ad51abeced5f302be": "fba306e574e34b9c2437709b0df71e0d",
".git/objects/6b/4e6c67922ab590da3e5761c0fee18c65176b3e": "79f10e781bf7bf7a234adec7d5e59671",
".git/objects/6b/fc0a15c9a57b0fd15afe2573f5353a796cc798": "74c61310662b5d818ab11d769a6b9ca7",
".git/objects/6c/0ba10c9c24435efcdf1782065aef04783bed43": "711298520b88de09dfabcf78a767e88f",
".git/objects/6c/db2396c0aa210fe5742790addd28268f6ff537": "d438a6db4484196bd6e630e7ac708e55",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/73/9d0aad06906b17645c55e48fdb70fe6ec9d028": "f90987c0039309f805fbd851364c0f9b",
".git/objects/78/610d11ff17b231ece3df19f0d846a5371591e5": "841f22d6998649088ea9c0ddee2bc5a3",
".git/objects/78/a2584cee0fe844591e2e0cf39f876ba57a8930": "b437ba3e3b4807c1ce77380736196427",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/678cc595c6ae65ac84bb09ae7b02d32416469e": "83421e06b1b6ed28c893a0591adc6683",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/a256ba96e44d9e0a25010b59309e16c0ad536f": "df9a54f55552bab0dacb6cd65fef8e2a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/296e06b22a6b94e050cf8e1288ce507f64af5b": "820761efc3c43c646a9b9b723b862e66",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/4c797cf1b367b42ecf847cd4758fc6ba2130ea": "f1a457b5f38b14a2901ca8077fccb891",
".git/objects/91/b1392b879b16d8eeae01f06fdfba9618433560": "d80c7c15d761f1bc59e1222b3433274d",
".git/objects/92/1b6e322f32e615d8306669d5604a34f5690c2e": "5830005942e6758a8d53c8224d568970",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/e241d03d9851efe0d7a3a7f6203a06177553b0": "3a60af09df686831ec05e99671c8b5cb",
".git/objects/97/98debf5c548b21b5d2f9cf5b6c714d36be58fb": "b81eb85d72f94904c47fb89ff478c374",
".git/objects/9d/5e50f2d8f360c4a36ebf5602c0d13b3c1d07b5": "4237ad01c633e7432eddc8576fd1d7ce",
".git/objects/9d/c42c914254e266a44b048bee073762aa97f547": "f79fae58208a350a7ca49663f8e68d6d",
".git/objects/9e/713d7cd1b52a38898cdf2838ad38e4ec503f18": "75faf913493b7d7a58272dd472004d0b",
".git/objects/a2/ea6e394bcd11850d4d823c67c7d6a262b73db1": "78e033ebbcd5afaacf6299480ab0a674",
".git/objects/a3/5a881ca68c94a266f01d3f67eca2c93be01a1e": "15b8c119360c82302231111b91ba4346",
".git/objects/a3/d6c650bbe25aaa2603b0df439b4df4d02853e7": "08b82833858184f51b1866e1b5932adc",
".git/objects/a3/e6a369c7b650927d52cc852477d1069137aff0": "8763f525ee7d86d622bff898f81078a4",
".git/objects/a6/33ad82090586772d811bdfdd13be087254431f": "e3e1e382721bde43406b1dec2641eee6",
".git/objects/a8/33101da729535695b67b8dae74b16fabedcbbf": "13cbd5965b5e5e50d28678406b13d22c",
".git/objects/ad/09de7370e78de29181dd29b08447fa0d5f858f": "4649399bb89fcb049052a586e2ee2ff9",
".git/objects/ad/f388571e7e423806fd6c23a3a6ebdc74c47383": "ba86d21b553d9f2a72f8ea4389ca23ca",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b6/95e70e462999c0daf1d4eb2f1730e85580d1e8": "e3314aee5bf2923fa6edcb66b9452e35",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e1b1c155597884b8dde0e7fcc4045d485e529c": "95c077706978970694762f1fb19cd6d4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/686e6f834dd8c3bdb339359e79fcd4cab6506d": "dbdf0a4e91becbfb9ddfe54e8c5dc6fb",
".git/objects/be/a1b78d48d0bb15072ffdb6c91afaf83fc0c4fe": "2e72a7fb978d764321c6cc91b05db271",
".git/objects/c4/25cfb20df895f64fe1f918316a36838caa0199": "6077dca8d6eb602baf42b5818f8e71ea",
".git/objects/c4/7c6f604356c020a599c2ee17664d22fe7310cf": "8bdfce3dbab629c7b99c9ac65703eb7f",
".git/objects/c5/7181d5b35d0d64984f9461eef3722fa56c2126": "0f7231051d51064ad343f3d6036c542d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cb/51a156703734835e8cd0b2f0ec781b8c4f8fca": "8474e4bda4acd748b0fc602b8702d940",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/a47264d3fcb37870c0e55312e7638374ad532a": "33b471f893dbfdd76a50864203f3d156",
".git/objects/d3/9b9e6a158dc74758d4682f639be5f4c4debac8": "a7cedca83084fe0d1fa2a023b1b6e13f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/080cd25347393ffc9232013bd00c591122ad08": "fca5934ea039b8b4f9fd732bff372233",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/3712a05122064e187c51b696b3c9e612084df0": "a9bf690b4bdc6e518dccbc63c8411e3a",
".git/objects/de/871a779d9196f9c0fa145b78904c268aad0ca8": "65a5eb57d886c6e4dd33c9ad320311e0",
".git/objects/de/bcf15bc3026265de2b58f9b56b2880ce031f63": "a622028ec8b7aafdb52896dc0f6e6318",
".git/objects/df/6951bb8487fae98f76ac0962969c4ac05bd3c8": "9c8e88a8c1fb30424fd096dd854bd191",
".git/objects/e2/f6311ec327337a777621f4d550a8abb4f1e3d8": "3199ba18f1ffab951faf67d36f8c6908",
".git/objects/e4/1b6daa8c7ddf033f2a25bbc15a06743c65c4c4": "684ebcd4a27ca6fac99a181891fc19da",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/d922e2600ac2de1630f16f551b9548ad3ef72c": "bd27ef29aea00dbe122147501d2abf0c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/9e46f16ec38bf1370e14348473188c46569b80": "6f273ccac46a47840dc7259b920c116d",
".git/objects/ff/f5a3cd338d1907f3d33d73a60d81cee7966d68": "cfc0de34e72c6213eb22a963e9e4659b",
".git/ORIG_HEAD": "d4cb5d51f2b133d9edf21354e4fe70cd",
".git/refs/heads/main": "eedabccfb28ec094e18382e55c8d3799",
".git/refs/remotes/origin/main": "eedabccfb28ec094e18382e55c8d3799",
"assets/AssetManifest.bin": "5856443d5a413a40a4e94015c88d8914",
"assets/AssetManifest.bin.json": "824efba777a46f44f22429ce3345872e",
"assets/AssetManifest.json": "5bb7d5938d126bb018e64732abf5fa3b",
"assets/assets/bg1.png": "f9886c2c6d5146f40fd8e1559cc5cc73",
"assets/assets/github.png": "d5cebe1c232b9b9fdbfdee273b164330",
"assets/assets/instagram.png": "219098481a5d7cf355b74e6bf070a374",
"assets/assets/lightbulb.png": "09df3f73c2e65a7fed1dcc74a09924f3",
"assets/assets/linkedin.png": "626eb45d6e2c98995acd00b20a079835",
"assets/assets/mypic.png": "151d35d1383f24e450ce52ca8ca79357",
"assets/assets/mypic_bw.png": "47946e396852d552451f816b31e05a3b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "56c9196f94e652e43555f4495115be54",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b397154b238f9fbff7f9b55410399f4f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "67df36da40f10be47930347b0592907e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "beb15be9f2138eca75144603cbc39d54",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3e10833ff85da11d1d6d79dae4ccdfce",
"/": "3e10833ff85da11d1d6d79dae4ccdfce",
"main.dart.js": "4d34681215a07143917422dac028e100",
"manifest.json": "07f66434d604ccac1b4d5244f35598aa",
"README.md": "3de5862b7a611740cf6ce9f1bb5a317d",
"version.json": "7367c9ca1c69727a8bb09a7d2d21d48c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
