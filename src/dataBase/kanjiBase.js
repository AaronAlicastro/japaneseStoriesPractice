const kanjiBase = [
  {
    char: "暖",
    etimology: ["sol", "mano", "lentitud"],
    sounds: ["あたたかい"],
  },
  {
    char: "可",
    etimology: ["boca", "clavo"],
    sounds: ["か"],
  },
  {
    char: "愛",
    etimology: ["mano", "techo", "corazón", "lentitud"],
    sounds: ["あい"],
  },
  {
    char: "着",
    etimology: ["oveja", "ojo"],
    sounds: ["つく", "きる"],
  },
  {
    char: "思",
    etimology: ["campo", "corazón"],
    sounds: ["おもい", "し"],
  },
  {
    char: "最",
    etimology: ["sol", "tomar"],
    sounds: ["さい"],
  },
  {
    char: "近",
    etimology: ["hacha", "camino"],
    sounds: ["ちかく", "きん"],
  },
  {
    char: "新",
    etimology: ["estar de pie", "árbol| hacha"],
    sounds: ["あたらしい"],
  },
  {
    char: "買",
    etimology: ["red o malla", "concha marina"],
    sounds: ["かう"],
  },
  {
    char: "色",
    etimology: ["persona arrodillada"],
    sounds: ["いろ", "えろ"],
  },
  {
    char: "自",
    etimology: ["naríz"],
    sounds: ["じ"],
  },
  {
    char: "身",
    etimology: ["vientre"],
    sounds: ["しん"],
  },
  {
    char: "分",
    etimology: ["ocho o divergido", "espada"],
    sounds: ["ふん", "ぷん", "ぶん"],
  },
  {
    char: "似",
    etimology: ["persona", "por medio de"],
    sounds: ["に", "あ"],
  },
  {
    char: "以",
    etimology: ["por medio de"],
    sounds: ["に", "あ"],
  },
  {
    char: "合",
    etimology: ["tapa", "boca"],
    sounds: ["あって"],
  },
  {
    char: "今",
    etimology: ["tapa", "cosa presente"],
    sounds: ["いま", "こん", "け"],
  },
  {
    char: "小",
    etimology: ["pequeño"],
    sounds: ["ちいさい"],
  },
  {
    char: "少",
    etimology: ["pequeño", "escasez"],
    sounds: ["すくない"],
  },
  {
    char: "前",
    etimology: ["antena", "carne", "cuchilla"],
    sounds: ["ぜん", "あえ"],
  },
  {
    char: "例",
    etimology: ["persona", "regla u orden", "cuchilla"],
    sounds: ["たとえ"],
  },
  {
    char: "別",
    etimology: ["otro o diferente", "cuchilla"],
    sounds: ["べつ"],
  },
  {
    char: "行",
    etimology: ["movimiento"],
    sounds: ["いく"],
  },
  {
    char: "重",
    etimology: ["ponderoso"],
    sounds: ["じゅう", "おもい"],
  },
  {
    char: "衝",
    etimology: ["movimiento", "ponderoso"],
    sounds: ["しょ"],
  },
  {
    char: "動",
    etimology: ["ponderoso", "fuerza"],
    sounds: ["どう"],
  },
  {
    char: "話",
    etimology: ["palabra", "lengua"],
    sounds: ["はなし"],
  },
  {
    char: "全",
    etimology: ["tapa", "rey"],
    sounds: ["せん"],
  },
  {
    char: "部",
    etimology: ["estar de pie", "boca", "pueblo"],
    sounds: ["ぶ"],
  },
  {
    char: "然",
    etimology: ["carne", "perro", "fuego"],
    sounds: ["ぜん", "せん"],
  },
  {
    char: "不",
    etimology: ["hojas colgando"],
    sounds: ["ふ"],
  },
  {
    char: "向",
    etimology: ["casa", "boca"],
    sounds: ["むき", "むいてる"],
  },
  {
    char: "聞",
    etimology: ["portal", "oreja"],
    sounds: ["きく"],
  },
  {
    char: "間",
    etimology: ["portal", "sol"],
    sounds: ["かん"],
  },
  {
    char: "質",
    etimology: ["hacha", "concha marina"],
    sounds: ["しつ"],
  },
  {
    char: "違",
    etimology: ["cuerda", "camino"],
    sounds: ["い", "ちがい"],
  },
  {
    char: "和",
    etimology: ["espiga", "boca"],
    sounds: ["わ", "わしょく"],
  },
  {
    char: "感",
    etimology: ["lanza y boca", "corazón"],
    sounds: ["かんじ"],
  },
  {
    char: "仕",
    etimology: ["persona", "caballero"],
    sounds: ["し"],
  },
  {
    char: "事",
    etimology: ["ritual", "reliquia"],
    sounds: ["ごと", "こと"],
  },
  {
    char: "逆",
    etimology: ["pie invertido", "camino"],
    sounds: ["ぎゃく"],
  },
  {
    char: "苦",
    etimology: ["planta", "antiguo"],
    sounds: ["にがい"],
  },
  {
    char: "手",
    etimology: ["mano"],
    sounds: ["て"],
  },
  {
    char: "実",
    etimology: ["techo", "semilla"],
    sounds: ["しつ"],
  },
  {
    char: "美",
    etimology: ["oveja", "grande"],
    sounds: ["うつくしい"],
  },
  {
    char: "見",
    etimology: ["ojo", "piernas"],
    sounds: ["み"],
  },
  {
    char: "諦",
    etimology: ["palabra", "dictador"],
    sounds: ["あきらめる"],
  },
  {
    char: "消",
    etimology: ["agua", "semejanza"],
    sounds: ["けす", "けします"],
  },
  {
    char: "画",
    etimology: ["pincel", "campo"],
    sounds: ["か", "かく", "が"],
  },
  {
    char: "時",
    etimology: ["sol", "templo"],
    sounds: ["とき", "じかん"],
  },
  {
    char: "計",
    etimology: ["palabra", "precisión"],
    sounds: ["けい", "はかる"],
  },
  {
    char: "問",
    etimology: ["portal", "boca"],
    sounds: ["もん", "と う"],
  },
  {
    char: "題",
    etimology: ["sol", "justo", "cabeza"],
    sounds: ["だい"],
  },
  {
    char: "流",
    etimology: ["agua", "cúmulo", "rio"],
    sounds: ["りゅ", "なが"],
  },
  {
    char: "作",
    etimology: ["persona", "surgir "],
    sounds: ["さく", "つくる"],
  },
  {
    char: "長",
    etimology: ["viejo con cabello largo", "bastón"],
    sounds: ["ちょお", "ながい"],
  },
  {
    char: "食",
    etimology: ["tapa", "alimento", "bastón"],
    sounds: ["しょく", "たべる"],
  },
  {
    char: "飲",
    etimology: ["tapa", "alimento", "bostezo"],
    sounds: ["のむ"],
  },
  {
    char: "次",
    etimology: ["muesca", "bostezo"],
    sounds: ["つぎ", "つぐ"],
  },
  {
    char: "会",
    etimology: ["tapa", "cúmulo"],
    sounds: ["かい", "あい", "あう"],
  },
  {
    char: "方",
    etimology: ["rastrillo"],
    sounds: ["かた", "ほ"],
  },
  {
    char: "法",
    etimology: ["agua", "unicornio"],
    sounds: ["ほ", "ほつ"],
  },
  {
    char: "文",
    etimology: ["escrito"],
    sounds: ["ぶん", "もん", "ふみ"],
  },
  {
    char: "注",
    etimology: ["agua", "rey"],
    sounds: ["ちゅう", "そそぐ"],
  },
  {
    char: "正",
    etimology: ["justo"],
    sounds: ["しょお", "せい", "まさ"],
  },
  {
    char: "直",
    etimology: ["precisión", "ojo", "alineación"],
    sounds: ["じき", "ちょく", "なおす"],
  },
  {
    char: "納",
    etimology: ["hilo", "interior"],
    sounds: ["のお", "な", "おさめる"],
  },
  {
    char: "得",
    etimology: ["movimiento", "concha marina", "pulgada"],
    sounds: ["とく", "える"],
  },
  {
    char: "意",
    etimology: ["sonido", "corazón"],
    sounds: ["い"],
  },
  {
    char: "容",
    etimology: ["techo", "tapa", "boca"],
    sounds: ["よお", "いれる"],
  },
  {
    char: "面",
    etimology: ["ojo", "boca", "naríz"],
    sounds: ["めん", "おも", "つら"],
  },
  {
    char: "白",
    etimology: ["shiro"],
    sounds: ["はく", "しろ", "しら"],
  },
  {
    char: "撮",
    etimology: ["acción física", "sol", "tomar"],
    sounds: ["さつ", "とる"],
  },
  {
    char: "影",
    etimology: ["sol", "capital", "rayos de luz"],
    sounds: ["えい", "かげ"],
  },
  {
    char: "字",
    etimology: ["techo", "niño"],
    sounds: ["じ", "あざ"],
  },
  {
    char: "学",
    etimology: ["mano", "niño"],
    sounds: ["がく", "まなぶ"],
  },
  {
    char: "習",
    etimology: ["alas", "blanco"],
    sounds: ["しゅう", "ならう"],
  },
  {
    char: "書",
    etimology: ["reliquia", "trazos", "sol"],
    sounds: ["しょ", "かく"],
  },
  {
    char: "数",
    etimology: ["arroz", "mujer", "lentitud"],
    sounds: ["すう", "かず", "かぞえる"],
  },
  {
    char: "減",
    etimology: ["agua", "lanza y boca"],
    sounds: ["げん", "へる", "へらす"],
  },
  {
    char: "超",
    etimology: ["correr", "invocar"],
    sounds: ["ちょお", "こえる", "こす"],
  },
  {
    char: "趣",
    etimology: ["correr", "tomar"],
    sounds: ["しゅ", "おもむき"],
  },
  {
    char: "集",
    etimology: ["pájaro", "árbol"],
    sounds: ["しゅう", "あつまる"],
  },
  {
    char: "中",
    etimology: ["equilibrio"],
    sounds: ["ちゅう", "なか"],
  },
  {
    char: "何",
    etimology: ["persona", "boca", "clavo"],
    sounds: ["か", "なに", "なん"],
  },
  {
    char: "忘",
    etimology: ["disipar", "corazón"],
    sounds: ["ぼお", "わすれる"],
  },
  {
    char: "風",
    etimology: ["viento", "insecto"],
    sounds: ["ふう", "かぜ", "かざ"],
  },
  {
    char: "邪",
    etimology: ["colmillo", "pueblo"],
    sounds: ["じゃ", "よこしま"],
  },
  {
    char: "難",
    etimology: ["martirio", "pájaro"],
    sounds: ["なん", "むずかしい", "かたい"],
  },
  {
    char: "軽",
    etimology: ["vehículo", "fino"],
    sounds: ["けい", "かるい"],
  },
  {
    char: "無",
    etimology: ["sin", "fuego"],
    sounds: ["む", "ぶ", "ない"],
  },
  {
    char: "気",
    etimology: ["vapor"],
    sounds: ["き", "け"],
  },
  {
    char: "理",
    etimology: ["jade", "aldea"],
    sounds: ["り"],
  },
  {
    char: "本",
    etimology: ["origen"],
    sounds: ["ほん", "もと"],
  },
  {
    char: "英",
    etimology: ["planta", "adorno"],
    sounds: ["えい", "はなぶさ"],
  },
  {
    char: "語",
    etimology: ["palabra", "individuo"],
    sounds: ["ご", "かたる"],
  },
  {
    char: "勉",
    etimology: ["parto", "fuerza"],
    sounds: ["べん", "つとめる"],
  },
  {
    char: "強",
    etimology: ["arco", "cúmulo", "insecto"],
    sounds: ["きょう", "ごう", "つよい", "しいる"],
  },
  {
    char: "弱",
    etimology: ["arco", "muesca"],
    sounds: ["じゃく", "よわい"],
  },
  {
    char: "興",
    etimology: ["mortero", "equidad"],
    sounds: ["こお", "きょう", "おこる"],
  },
  {
    char: "味",
    etimology: ["boca", "aún no"],
    sounds: ["み", "あじ"],
  },
  {
    char: "知",
    etimology: ["flecha", "boca"],
    sounds: ["ち お しる"],
  },
  {
    char: "識",
    etimology: ["palabra", "sonido", "lanza"],
    sounds: ["しき"],
  },
  {
    char: "楽",
    etimology: ["tambor", "árbol"],
    sounds: ["らく", "がく", "たのしむ"],
  },
  {
    char: "続",
    etimology: ["hilo", "vender"],
    sounds: ["ぞく", "つずく"],
  },
  {
    char: "後",
    etimology: ["movimiento", "hilo", "lentitud"],
    sounds: ["ご", "こお", "あと", "うしろ", "のちょ"],
  },
  {
    char: "頭",
    etimology: ["frijol", "cabeza"],
    sounds: ["とう", "ず", "あたま", "かしら"],
  },
  {
    char: "考",
    etimology: ["vejez", "obstáculo"],
    sounds: ["こう", "かんがえる"],
  },
  {
    char: "他",
    etimology: ["persona", "serpiente"],
    sounds: ["た", "ほか"],
  },
  {
    char: "地",
    etimology: ["tierra", "serpiente"],
    sounds: ["ち", "じ"],
  },
  {
    char: "好",
    etimology: ["mujer", "niño"],
    sounds: ["こう", "このむ", "すき"],
  },
  {
    char: "安",
    etimology: ["techo", "mujer"],
    sounds: ["あん", "やすい"],
  },
  {
    char: "誰",
    etimology: ["palabra", "pájaro"],
    sounds: ["すい", "だれ"],
  },
  {
    char: "緒",
    etimology: ["hilo", "mono"],
    sounds: ["しょ", "ちょ", "お"],
  },
  {
    char: "外",
    etimology: ["noche", "grieta"],
    sounds: ["がい", "げ", "そと", "ほか", "かずれる"],
  },
  {
    char: "切",
    etimology: ["siete", "espada"],
    sounds: ["せつ", "さい", "きる", "きれる"],
  },
  {
    char: "出",
    etimology: ["salir"],
    sounds: ["しゅつ", "しゅ", "さい", "だす", "でる"],
  },
  {
    char: "怖",
    etimology: ["psiquis", "paño"],
    sounds: ["ふ", "こわい", "おぞれる"],
  },
  {
    char: "頑",
    etimology: ["dureza", "cabeza"],
    sounds: ["がん", "かたくな"],
  },
  {
    char: "張",
    etimology: ["arco", "largo"],
    sounds: ["ちょう", "はる"],
  },
  {
    char: "頃",
    etimology: ["inclinado", "cabeza"],
    sounds: ["けい", "ころ", "ごろ"],
  },
  {
    char: "教",
    etimology: ["piedad filial", "lentitud"],
    sounds: ["ちょう", "おしえる", "おそわる"],
  },
  {
    char: "科",
    etimology: ["espiga", "cazo"],
    sounds: ["か"],
  },
  {
    char: "決",
    etimology: ["agua", "gubia"],
    sounds: ["けつ", "きめる", "きまる"],
  },
  {
    char: "受",
    etimology: ["mano", "techo", "mano"],
    sounds: ["じゅ", "うける", "うかる"],
  },
  {
    char: "授",
    etimology: ["acción física", "mano", "techo", "mano"],
    sounds: ["じゅ", "さずける"],
  },
  {
    char: "選",
    etimology: ["organizar", "camino"],
    sounds: ["せん", "えらぶ"],
  },
  {
    char: "悪",
    etimology: ["deforme", "corazón"],
    sounds: ["あく", "お", "わるい"],
  },
  {
    char: "要",
    etimology: ["tronco", "mujer"],
    sounds: ["よう", "いる"],
  },
  {
    char: "必",
    etimology: ["estaca", "corazón"],
    sounds: ["ひつ", "かならず"],
  },
  {
    char: "択",
    etimology: ["acción física", "medida"],
    sounds: ["たく"],
  },
  {
    char: "肢",
    etimology: ["carne", "rama"],
    sounds: ["し"],
  },
  {
    char: "磨",
    etimology: ["cobertizo", "cañamo", "piedra"],
    sounds: ["ま", "みがく"],
  },
  {
    char: "名",
    etimology: ["noche", "boca"],
    sounds: ["めい", "みょう", "な"],
  },
  {
    char: "有",
    etimology: ["posesión", "carne"],
    sounds: ["ゆう", "う", "ある"],
  },
  {
    char: "際",
    etimology: ["pueblo", "festival"],
    sounds: ["さい", "きわ"],
  },
  {
    char: "敗",
    etimology: ["concha marina", "lentitud"],
    sounds: ["はい", "やぶれる"],
  },
  {
    char: "負",
    etimology: ["encorvado", "concha marina"],
    sounds: ["ふ", "まける", "おう"],
  },
  {
    char: "葉",
    etimology: ["planta", "eslabón", "árbol"],
    sounds: ["よう", "は", "ば"],
  },
  {
    char: "映",
    etimology: ["sol", "adorno"],
    sounds: ["えい", "うつる", "はえる"],
  },
  {
    char: "経",
    etimology: ["hilo", "telar"],
    sounds: ["けい", "きょう", "へる"],
  },
  {
    char: "験",
    etimology: ["caballo", "concentrado"],
    sounds: ["けん", "げん", "ためす"],
  },
  {
    char: "初",
    etimology: ["prenda", "espada"],
    sounds: ["しょ", "はじめ", "はつ"],
  },
  {
    char: "始",
    etimology: ["mujer", "plataforma"],
    sounds: ["し", "はじめる"],
  },
  {
    char: "触",
    etimology: ["cuerno", "insecto"],
    sounds: ["しょく", "さわる", "ふれる"],
  },
  {
    char: "使",
    etimology: ["persona", "estandarte"],
    sounds: ["し", "つかう"],
  },
  {
    char: "便",
    etimology: ["persona", "conveniente"],
    sounds: ["べん"],
  },
  {
    char: "礼",
    etimology: ["espíritu", "simpleza"],
    sounds: ["れい", "らい"],
  },
  {
    char: "年",
    etimology: ["año"],
    sounds: ["ねん", "とし"],
  },
  {
    char: "失",
    etimology: ["errar"],
    sounds: ["しつ", "うしなう"],
  },
  {
    char: "先",
    etimology: ["anticipado"],
    sounds: ["せん", "さき"],
  },
  {
    char: "生",
    etimology: ["vida"],
    sounds: ["せい", "しょう", "いきる", "うまれる"],
  },
  {
    char: "昔",
    etimology: ["conjunto", "sol"],
    sounds: ["せき", "しゃく", "むかし"],
  },
  {
    char: "将",
    etimology: ["cama", "mano", "pulgada"],
    sounds: ["しょう", "まさに"],
  },
  {
    char: "棋",
    etimology: ["árbol", "criba"],
    sounds: ["き", "ぎ"],
  },
  {
    char: "化",
    etimology: ["persona", "inclinado"],
    sounds: ["か", "け", "ばける", "ふける"],
  },
  {
    char: "冷",
    etimology: ["muesca", "orden"],
    sounds: ["れい", "つめたい", "ひえる", "さめる"],
  },
  {
    char: "静",
    etimology: ["azul", "luchar"],
    sounds: ["せい", "じょう", "しずか"],
  },
  {
    char: "変",
    etimology: ["complejidad", "lentitud"],
    sounds: ["へん", "かわる", "かえる"],
  },
  {
    char: "物",
    etimology: ["buey", "sangre"],
    sounds: ["もの", "ぶつ", "もつ"],
  },
  {
    char: "嫌",
    etimology: ["mujer", "dos espigas", "reliquia"],
    sounds: ["けん", "げん", "きらい", "いや"],
  },
  {
    char: "幸",
    etimology: ["grillete"],
    sounds: ["こう", "しあわせ", "さいわい"],
  },
  {
    char: "辛",
    etimology: ["punzón"],
    sounds: ["しん", "からい", "つらい"],
  },
  {
    char: "悲",
    etimology: ["alas", "corazón"],
    sounds: ["ひ", "かなしい"],
  },
  {
    char: "落",
    etimology: ["planta", "agua", "lentitud", "boca"],
    sounds: ["らく", "おちる", "おとす"],
  },
  {
    char: "込",
    etimology: ["entrar", "camino"],
    sounds: ["こむ", "こめる"],
  },
  {
    char: "混",
    etimology: ["agua", "sol", "multitud "],
    sounds: ["こん", "まじる", "まざる", "まぜる"],
  },
  {
    char: "嬉",
    etimology: ["mujer", "regocijo"],
    sounds: ["き", "うれしい"],
  },
  {
    char: "房",
    etimology: ["puerta", "rastrillo"],
    sounds: ["ぼう", "ふさ"],
  },
  {
    char: "声",
    etimology: ["voz"],
    sounds: ["せい", "こえ"],
  },
  {
    char: "能",
    etimology: ["tótem de oso"],
    sounds: ["のう"],
  },
  {
    char: "所",
    etimology: ["puerta", "hacha"],
    sounds: ["しょ", "ところ"],
  },
  {
    char: "特",
    etimology: ["buey", "templo"],
    sounds: ["とく"],
  },
  {
    char: "持",
    etimology: ["acción física", "templo"],
    sounds: ["じ", "もつ"],
  },
  {
    char: "待",
    etimology: ["movimiento", "templo"],
    sounds: ["たい", "まつ"],
  },
  {
    char: "練",
    etimology: ["hilo", "east"],
    sounds: ["れん", "ねる"],
  },
  {
    char: "義",
    etimology: ["oveja", "acción física", "lanza"],
    sounds: ["ぎ"],
  },
  {
    char: "議",
    etimology: ["palabra", "oveja", "acción física", "lanza"],
    sounds: ["ぎ"],
  },
  {
    char: "儀",
    etimology: ["persona", "oveja", "acción física", "lanza"],
    sounds: ["ぎ"],
  },
  {
    char: "彼",
    etimology: ["movimiento", "cuero"],
    sounds: ["かれ", "ひ", "かの"],
  },
  {
    char: "氏",
    etimology: ["linaje"],
    sounds: ["し", "うじ"],
  },
  {
    char: "猫",
    etimology: ["bestia", "planta", "campo"],
    sounds: ["びょう", "ねこ"],
  },
  {
    char: "描",
    etimology: ["acción física", "planta", "campo"],
    sounds: ["びょう", "えがく", "かく"],
  },
  {
    char: "俺",
    etimology: ["persona", "firmeza"],
    sounds: ["おれ"],
  },
  {
    char: "僕",
    etimology: ["persona", "sirviente"],
    sounds: ["ぼく"],
  },
  {
    char: "牛",
    etimology: ["buey"],
    sounds: ["うし", "ぎゅう"],
  },
  {
    char: "午",
    etimology: ["mediodía"],
    sounds: ["ご", "うま"],
  },
  {
    char: "歌",
    etimology: ["boca", "clavo", "bostezo"],
    sounds: ["か", "うた", "うたう"],
  },
  {
    char: "調",
    etimology: ["palabra", "perímetro"],
    sounds: ["ちょう", "しらべる", "ととのう"],
  },
  {
    char: "道",
    etimology: ["ante cabeza", "camino"],
    sounds: ["みち", "どう"],
  },
  {
    char: "珍",
    etimology: ["jade", "tapa", "textura"],
    sounds: ["ちん", "めずらしい"],
  },
  {
    char: "飯",
    etimology: ["tapa", "alimento", "ingerir"],
    sounds: ["はん", "めし"],
  },
  {
    char: "朝",
    etimology: ["mañana"],
    sounds: ["ちょう", "あさ"],
  },
  {
    char: "昼",
    etimology: ["tarde"],
    sounds: ["ちょう", "ひる"],
  },
  {
    char: "晩",
    etimology: ["noche"],
    sounds: ["ばん"],
  },
  {
    char: "増",
    etimology: ["tierra", "ante campo", "sol"],
    sounds: ["ぞう", "ふえる", "ふやす"],
  },
  {
    char: "鉄",
    etimology: ["dinero", "errar"],
    sounds: ["てつ", "くろがね"],
  },
  {
    char: "曜",
    etimology: ["sol", "plumas", "pájaro"],
    sounds: ["おう"],
  },
  {
    char: "砂",
    etimology: ["piedra", "pequeño", "escasez"],
    sounds: ["さ", "しゃ", "すな"],
  },
  {
    char: "糖",
    etimology: ["arroz", "cobertizo", "reliquia", "boca"],
    sounds: ["とう"],
  },
  {
    char: "漠",
    etimology: ["agua", "planta", "sol", "grande"],
    sounds: ["ばく"],
  },
  {
    char: "探",
    etimology: ["acción física", "cueva", "árbol"],
    sounds: ["たん", "さがす", "さぐる"],
  },
  {
    char: "深",
    etimology: ["agua", "cueva", "árbol"],
    sounds: ["しん", "ふかい"],
  },
  {
    char: "遠",
    etimology: ["tierra", "prenda", "camino"],
    sounds: ["えん", "とおい"],
  },
  {
    char: "発",
    etimology: ["carcaj"],
    sounds: ["はつ", "ほつ", "たつ"],
  },
  {
    char: "旅",
    etimology: ["rastrillo", "horda"],
    sounds: ["りょ", "たび"],
  },
  {
    char: "険",
    etimology: ["pueblo", "concentrado"],
    sounds: ["けん", "けわしい"],
  },
  {
    char: "陽",
    etimology: ["pueblo", "sol", "sangre"],
    sounds: ["よう", "ひ"],
  },
  {
    char: "熱",
    etimology: ["anticipado", "tierra", "circular", "fuego"],
    sounds: ["ねつ", "あつい"],
  },
  {
    char: "途",
    etimology: ["refugio", "camino"],
    sounds: ["と", "みち"],
  },
  {
    char: "尽",
    etimology: ["medida", "restos"],
    sounds: ["じん", "つくす", "つきる"],
  },
  {
    char: "駅",
    etimology: ["caballo", "medida"],
    sounds: ["えき"],
  },
  {
    char: "歩",
    etimology: ["detenerse", "pequeño", "escasez"],
    sounds: ["ほ", "ぶ", "あゆむ", "あるく"],
  },
  {
    char: "含",
    etimology: ["tapa", "cosa presente", "boca"],
    sounds: ["がん", "ふくむ", "ふくめる"],
  },
  {
    char: "急",
    etimology: ["encorvado", "reliquia", "corazón"],
    sounds: ["きゅう", "いそぐ"],
  },
  {
    char: "戻",
    etimology: ["puerta", "grande"],
    sounds: ["れい", "もどす", "もどる"],
  },
  {
    char: "引",
    etimology: ["arco", "cuerda"],
    sounds: ["いん", "ひく", "ひける"],
  },
  {
    char: "越",
    etimology: ["correr", "alabarda"],
    sounds: ["えつ", "こす", "こえる"],
  },
  {
    char: "夜",
    etimology: ["techo", "persona", "luna creciente"],
    sounds: ["や", "よ", "よる"],
  },
  {
    char: "赤",
    etimology: ["tierra", "complejidad"],
    sounds: ["せき", "あかい"],
  },
  {
    char: "青",
    etimology: ["vida", "luna"],
    sounds: ["せい", "あおい"],
  },
  {
    char: "黄",
    etimology: ["conjunto", "ornamento"],
    sounds: ["こう", "き"],
  },
  {
    char: "緑",
    etimology: ["hilo", "tallado"],
    sounds: ["りょく", "みどり"],
  },
  {
    char: "黒",
    etimology: ["aldea", "fuego"],
    sounds: ["こく", "くろい"],
  },
  {
    char: "茶",
    etimology: ["planta", "tapa", "árbol"],
    sounds: ["ちゃ", "せ"],
  },
  {
    char: "水",
    etimology: ["agua"],
    sounds: ["せい", "みず"],
  },
  {
    char: "桃",
    etimology: ["árbol", "presagio"],
    sounds: ["とう", "もも"],
  },
  {
    char: "灰",
    etimology: ["cobertizo", "fuego"],
    sounds: ["かい", "はい"],
  },
  {
    char: "橙",
    etimology: ["árbol", "escalar"],
    sounds: ["とう", "だいだい"],
  },
  {
    char: "紫",
    etimology: ["detenerse", "inclinado", "hilo"],
    sounds: ["し", "むらさき"],
  },
  {
    char: "金",
    etimology: ["oro"],
    sounds: ["きん", "かね"],
  },
  {
    char: "銀",
    etimology: ["oro", "alimento"],
    sounds: ["ぎん", "しろがね"],
  },
  {
    char: "紺",
    etimology: ["hilo", "dulce"],
    sounds: ["こん"],
  },
  {
    char: "焦",
    etimology: ["pájaro", "fuego"],
    sounds: ["しょw", "あせる", "こげる"],
  },
  {
    char: "紅",
    etimology: ["hilo", "artesano"],
    sounds: ["こう", "くれない", "べに"],
  },
  {
    char: "群",
    etimology: ["monarca", "oveja"],
    sounds: ["ぐん", "むれる", "むら"],
  },
  {
    char: "虹",
    etimology: ["insecto", "artesano"],
    sounds: ["こう", "にじ"],
  },
];

export default kanjiBase;
