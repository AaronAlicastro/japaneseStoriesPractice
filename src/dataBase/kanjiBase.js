const kanjiBase = [
  // begining
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

  // november 2 2026
  {
    char: "村",
    etimology: ["árbol", "pueblo"],
    sounds: ["むら", "そん"],
  },
  {
    char: "周",
    etimology: ["perímetro"],
    sounds: ["しゅう", "まわり"],
  },
  {
    char: "木",
    etimology: ["árbol"],
    sounds: ["き", "こ", "もく", "ぼく"],
  },
  {
    char: "々",
    etimology: ["repetición"],
    sounds: ["のま"],
  },
  {
    char: "若",
    etimology: ["planta", "derecha"],
    sounds: ["わかい", "もし", "じゃく"],
  },
  {
    char: "広",
    etimology: ["cobertizo", "privado"],
    sounds: ["ひろい", "こう"],
  },
  {
    char: "肥",
    etimology: ["carne", "serpiente"],
    sounds: ["こ肥える", "こやし", "ひ"],
  },
  {
    char: "土",
    etimology: ["tierra"],
    sounds: ["つち", "ど", "と"],
  },
  {
    char: "豊",
    etimology: ["mortero", "frijol"],
    sounds: ["ゆたか", "ほう"],
  },
  {
    char: "奥",
    etimology: ["cobertizo", "arroz", "grande"],
    sounds: ["おく", "おう"],
  },
  {
    char: "大",
    etimology: ["grande"],
    sounds: ["おおきい", "だい", "たい"],
  },
  {
    char: "滝",
    etimology: ["agua", "dragón"],
    sounds: ["たき", "ろう"],
  },
  {
    char: "高",
    etimology: ["torre", "alto"],
    sounds: ["たかい", "こう"],
  },
  {
    char: "山",
    etimology: ["montaña"],
    sounds: ["やま", "さん"],
  },
  {
    char: "太",
    etimology: ["grande", "gota"],
    sounds: ["ふとい", "たい", "た"],
  },
  {
    char: "光",
    etimology: ["fuego", "piernas"],
    sounds: ["ひかり", "ひかる", "こう"],
  },
  {
    char: "輝",
    etimology: ["sol", "ejército"],
    sounds: ["かがやく", "き"],
  },
  {
    char: "透",
    etimology: ["privado", "camino"],
    sounds: ["すける", "とう"],
  },
  {
    char: "通",
    etimology: ["cuerda", "camino"],
    sounds: ["とおる", "かよう", "つう"],
  },
  {
    char: "賢",
    etimology: ["ojo", "concha marina"],
    sounds: ["かしこい", "けん"],
  },
  {
    char: "老",
    etimology: ["viejo con cabello largo", "bastón"],
    sounds: ["おいいる", "ふける", "ろう"],
  },
  {
    char: "定",
    etimology: ["techo", "pie detenerse"],
    sounds: ["さだめる", "てい", "じょう"],
  },
  {
    char: "期",
    etimology: ["criba", "luna"],
    sounds: ["き", "ご"],
  },
  {
    char: "的",
    etimology: ["blanco", "cuchara"],
    sounds: ["まと", "てき"],
  },
  {
    char: "神",
    etimology: ["espíritu", "extender"],
    sounds: ["かみ", "しん", "じん"],
  },
  {
    char: "様",
    etimology: ["árbol", "oveja", "agua"],
    sounds: ["さま", "よう"],
  },
  {
    char: "収",
    etimology: ["hebra", "mano que sostiene"],
    sounds: ["おさめる", "しゅう"],
  },
  {
    char: "穫",
    etimology: ["espiga", "pájaro"],
    sounds: ["かく"],
  },
  {
    char: "準",
    etimology: ["agua", "pájaro", "diez"],
    sounds: ["じゅん"],
  },
  {
    char: "備",
    etimology: ["persona", "flecha", "campo"],
    sounds: ["そなえる", "び"],
  },
  {
    char: "嵐",
    etimology: ["montaña", "viento"],
    sounds: ["あらし", "らん"],
  },
  {
    char: "来",
    etimology: ["espiga", "persona"],
    sounds: ["くる", "きたる", "らい"],
  },
  {
    char: "逃",
    etimology: ["presagio", "camino"],
    sounds: ["にげる", "とう"],
  },
  {
    char: "日",
    etimology: ["sol"],
    sounds: ["ひ", "か", "にち", "じつ"],
  },
  {
    char: "止",
    etimology: ["detenerse"],
    sounds: ["とまる", "し"],
  },
  {
    char: "濁",
    etimology: ["agua", "insecto", "concha marina"],
    sounds: ["にごる", "だく"],
  },
  {
    char: "乱",
    etimology: ["lengua", "gancho"],
    sounds: ["みだれる", "らん"],
  },
  {
    char: "起",
    etimology: ["correr", "serpiente"],
    sounds: ["おきる", "き"],
  },
  {
    char: "火",
    etimology: ["fuego"],
    sounds: ["ひ", "ほ", "か"],
  },
  {
    char: "病",
    etimology: ["enfermedad", "tercero"],
    sounds: ["やまい", "びょう"],
  },
  {
    char: "暗",
    etimology: ["sol", "sonido"],
    sounds: ["くらい", "あん"],
  },
  {
    char: "絶",
    etimology: ["hilo", "cuchilla"],
    sounds: ["たえる", "ぜつ"],
  },
  {
    char: "望",
    etimology: ["antiguo", "luna", "rey"],
    sounds: ["のぞむ", "ぼう", "もう"],
  },
  {
    char: "包",
    etimology: ["encorvado", "serpiente"],
    sounds: ["つつむ", "ほう"],
  },
  {
    char: "一",
    etimology: ["uno"],
    sounds: ["ひとつ", "いち", "いつ"],
  },
  {
    char: "匹",
    etimology: ["caja", "persona"],
    sounds: ["ひき", "ひつ"],
  },
  {
    char: "言",
    etimology: ["palabra"],
    sounds: ["いう", "こと", "げん", "ごん"],
  },
  {
    char: "真",
    etimology: ["diez", "ojo", "base"],
    sounds: ["ま", "しん"],
  },
  {
    char: "確",
    etimology: ["piedra", "pájaro"],
    sounds: ["たしか", "かく"],
  },
  {
    char: "禁",
    etimology: ["árbol", "espíritu"],
    sounds: ["きん"],
  },
  {
    char: "登",
    etimology: ["pies", "mortero", "recipiente"],
    sounds: ["のぼる", "とう", "と"],
  },
  {
    char: "頂",
    etimology: ["clavo", "cabeza"],
    sounds: ["いただき", "ちょう"],
  },
  {
    char: "上",
    etimology: ["arriba"],
    sounds: ["うえ", "あがる", "じょう"],
  },
  {
    char: "羽",
    etimology: ["alas"],
    sounds: ["はね", "は", "う"],
  },
  {
    char: "派",
    etimology: ["agua", "sucursal"],
    sounds: ["は"],
  },
  {
    char: "笑",
    etimology: ["bambú", "persona arrodillada"],
    sounds: ["わらう", "えむ", "しょう"],
  },
  {
    char: "海",
    etimology: ["agua", "madre"],
    sounds: ["うみ", "かい"],
  },
  {
    char: "二",
    etimology: ["dos"],
    sounds: ["ふたつ", "に"],
  },
  {
    char: "度",
    etimology: ["cobertizo", "vejez", "mano"],
    sounds: ["たび", "ど"],
  },
  {
    char: "世",
    etimology: ["generación"],
    sounds: ["よ", "せい", "せ"],
  },
  {
    char: "界",
    etimology: ["campo", "persona"],
    sounds: ["かい"],
  },
  {
    char: "救",
    etimology: ["pedir", "lentitud"],
    sounds: ["すくう", "きゅう"],
  },
  {
    char: "奇",
    etimology: ["grande", "boca", "clavo"],
    sounds: ["くし", "き"],
  },
  {
    char: "跡",
    etimology: ["pie", "rojo"],
    sounds: ["あと", "せき"],
  },
  {
    char: "体",
    etimology: ["persona", "origen"],
    sounds: ["からだ", "たい"],
  },
  {
    char: "国",
    etimology: ["recinto", "jade"],
    sounds: ["くに", "こく"],
  },
  {
    char: "犬",
    etimology: ["perro"],
    sounds: ["いぬ", "けん"],
  },
  {
    char: "住",
    etimology: ["persona", "señor"],
    sounds: ["すむ", "じゅう"],
  },
  {
    char: "王",
    etimology: ["rey"],
    sounds: ["おう"],
  },
  {
    char: "私",
    etimology: ["espiga", "privado"],
    sounds: ["わたくし", "わたし", "し"],
  },
  {
    char: "十",
    etimology: ["diez"],
    sounds: ["とお", "じゅう", "じっ"],
  },
  {
    char: "川",
    etimology: ["río"],
    sounds: ["かわ", "せん"],
  },
  {
    char: "三",
    etimology: ["tres"],
    sounds: ["みっつ", "さん"],
  },
  {
    char: "力",
    etimology: ["fuerza"],
    sounds: ["ちから", "りょく", "りき"],
  },
  {
    char: "口",
    etimology: ["boca"],
    sounds: ["くち", "こう", "く"],
  },

  // total november 2 2026
  {
    char: "春",
    etimology: ["tres", "persona", "sol"],
    sounds: ["はる", "しゅん"],
  },
  {
    char: "開",
    etimology: ["portal", "dos", "dos manos"],
    sounds: ["ひらく", "あける", "かい"],
  },
  {
    char: "諸",
    etimology: ["palabra", "persona", "misericordia"],
    sounds: ["もろ", "しょ"],
  },
  {
    char: "惹",
    etimology: ["por medio de", "derecha", "corazón"],
    sounds: ["ひく", "じゃく", "じゃ"],
  },
  {
    char: "響",
    etimology: ["pueblo", "alimento", "sonido"],
    sounds: ["ひびく", "きょう"],
  },
  {
    char: "下",
    etimology: ["abajo"],
    sounds: ["した", "しも", "くだる", "さがる", "げ", "か"],
  },
  {
    char: "座",
    etimology: ["cobertizo", "persona", "persona", "tierra"],
    sounds: ["すわる", "ざ"],
  },
  {
    char: "掛",
    etimology: ["acción física", "hebra", "tierra"],
    sounds: ["かける", "かかる", "け"],
  },
  {
    char: "論",
    etimology: ["palabra", "tapa", "cuerda"],
    sounds: ["ろん"],
  },
  {
    char: "誤",
    etimology: ["palabra", "boca", "caballero"],
    sounds: ["あやまると", "ご"],
  },
  {
    char: "解",
    etimology: ["cuerno", "buey", "espada"],
    sounds: ["とく", "とかす", "かい", "げ"],
  },
  {
    char: "迷",
    etimology: ["arroz", "camino"],
    sounds: ["まよう", "めい"],
  },
  {
    char: "惑",
    etimology: ["recinto", "lanza", "corazón"],
    sounds: ["まどう", "わく"],
  },
  {
    char: "巻",
    etimology: ["ocho o divergido", "persona arrodillada", "cuerda"],
    sounds: ["まく", "まき", "かん"],
  },
  {
    char: "素",
    etimology: ["crecer", "hilo"],
    sounds: ["す", "そ"],
  },
  {
    char: "敵",
    etimology: ["camino", "antiguo", "lentitud"],
    sounds: ["かたき", "てき"],
  },
  {
    char: "我",
    etimology: ["mano", "lanza"],
    sounds: ["わたし", "われ", "わ", "が"],
  },
  {
    char: "慢",
    etimology: ["psiquis", "sol", "ojo", "recipiente"],
    sounds: ["まん"],
  },
  {
    char: "残",
    etimology: ["hueso", "lanza y boca"],
    sounds: ["のこる", "のこす", "ざん"],
  },
  {
    char: "森",
    etimology: ["árbol", "árbol", "árbol"],
    sounds: ["もり", "しん"],
  },
  {
    char: "取",
    etimology: ["oreja", "mano"],
    sounds: ["とる", "しゅ"],
  },
  {
    char: "魔",
    etimology: ["cobertizo", "cañamo", "demonio"],
    sounds: ["ま"],
  },
  {
    char: "女",
    etimology: ["mujer"],
    sounds: ["おんな", "め", "じょ", "にょ", "にょう"],
  },
  {
    char: "五",
    etimology: ["cinco"],
    sounds: ["いつつ", "いつ", "ご"],
  },
  {
    char: "百",
    etimology: ["uno", "blanco"],
    sounds: ["ひゃく", "びゃく", "ぴゃく"],
  },
  {
    char: "才",
    etimology: ["brote", "talento"],
    sounds: ["さい"],
  },
  {
    char: "千",
    etimology: ["persona", "diez"],
    sounds: ["ち", "せん"],
  },
  {
    char: "抜",
    etimology: ["acción física", "amigo"],
    sounds: ["ぬく", "ぬける", "ばつ"],
  },
  {
    char: "家",
    etimology: ["techo", "cerdo"],
    sounds: ["いえ", "や", "うち", "か", "け"],
  },
  {
    char: "人",
    etimology: ["persona"],
    sounds: ["ひと", "じん", "にん"],
  },
  {
    char: "恋",
    etimology: ["hilo", "disipar", "corazón"],
    sounds: ["こい", "こいしい", "れん"],
  },
  {
    char: "古",
    etimology: ["diez", "boca"],
    sounds: ["ふるい", "こ"],
  },
  {
    char: "牙",
    etimology: ["colmillo"],
    sounds: ["きば", "が", "げ"],
  },
  {
    char: "鍋",
    etimology: ["oro", "cobertizo", "boca", "campo"],
    sounds: ["なべ", "か"],
  },
  {
    char: "煮",
    etimology: ["viejo con cabello largo", "sol", "fuego"],
    sounds: ["にる", "にかえす", "しゃ"],
  },
  {
    char: "明",
    etimology: ["sol", "luna"],
    sounds: ["あかるい", "あける", "めい", "みょう"],
  },
  {
    char: "返",
    etimology: ["reverso", "camino"],
    sounds: ["かえす", "かえる", "へん"],
  },
  {
    char: "薬",
    etimology: ["planta", "tambor", "árbol"],
    sounds: ["くすり", "やく"],
  },
  {
    char: "用",
    etimology: ["utilidad"],
    sounds: ["もちいる", "よう"],
  },
  {
    char: "瓶",
    etimology: ["combinar", "cerámica"],
    sounds: ["かめ", "びん"],
  },
  {
    char: "干",
    etimology: ["escudo"],
    sounds: ["ほす", "ひる", "かん"],
  },
  {
    char: "滴",
    etimology: ["agua", "antiguo", "antena"],
    sounds: ["しずく", "したたる", "てき"],
  },
  {
    char: "瞬",
    etimology: ["ojo", "antena", "oprimir", "pies"],
    sounds: ["またたく", "しゅん"],
  },
  {
    char: "肌",
    etimology: ["carne", "mesa"],
    sounds: ["はだ", "き"],
  },
  {
    char: "曲",
    etimology: ["curva"],
    sounds: ["まがる", "まげる", "きょく"],
  },
  {
    char: "背",
    etimology: ["norte", "carne"],
    sounds: ["せ", "せい", "そむく", "はい"],
  },
  {
    char: "伸",
    etimology: ["persona", "extender"],
    sounds: ["のびる", "のばす", "しん"],
  },
  {
    char: "髪",
    etimology: ["viejo con cabello largo", "antena", "amigo", "cabello"],
    sounds: ["かみ", "はつ"],
  },
  {
    char: "毛",
    etimology: ["pelo"],
    sounds: ["け", "もう"],
  },
  {
    char: "姿",
    etimology: ["surgir", "mujer"],
    sounds: ["すがた", "し"],
  },
  {
    char: "成",
    etimology: ["lanza", "hacha"],
    sounds: ["なる", "なす", "せい", "じょう"],
  },
  {
    char: "功",
    etimology: ["artesano", "fuerza"],
    sounds: ["いさお", "こう", "く"],
  },
  {
    char: "満",
    etimology: ["agua", "dos", "ingresar"],
    sounds: ["みちる", "みたす", "まん"],
  },
  {
    char: "足",
    etimology: ["boca", "detenerse"],
    sounds: ["あし", "たりる", "たす", "そく"],
  },
  {
    char: "臭",
    etimology: ["naríz", "perro"],
    sounds: ["くさい", "におう", "しゅう"],
  },
  {
    char: "花",
    etimology: ["planta", "persona", "inclinado"],
    sounds: ["はな", "か"],
  },
  {
    char: "飾",
    etimology: ["alimento", "persona", "paño"],
    sounds: ["かざる", "しょく"],
  },
  {
    char: "付",
    etimology: ["persona", "pulgada"],
    sounds: ["つける", "つく", "ふ"],
  },
  {
    char: "替",
    etimology: ["persona", "persona", "sol"],
    sounds: ["かえる", "かわる", "たい"],
  },
  {
    char: "魅",
    etimology: ["demonio", "aún no"],
    sounds: ["み"],
  },
  {
    char: "町",
    etimology: ["campo", "clavo"],
    sounds: ["まち", "ちょう"],
  },
  {
    char: "微",
    etimology: ["movimiento", "montaña", "persona", "lentitud"],
    sounds: ["かすか", "び"],
  },
  {
    char: "目",
    etimology: ["ojo"],
    sounds: ["め", "ま", "もく", "ぼく"],
  },
  {
    char: "惚",
    etimology: ["psiquis", "disipar", "corazón"],
    sounds: ["ほれる", "ぼけ", "こつ"],
  },
  {
    char: "晴",
    etimology: ["sol", "azul"],
    sounds: ["はれる", "はらす", "せい"],
  },
  {
    char: "帰",
    etimology: ["escoba", "delante", "camino"],
    sounds: ["かえる", "かえす", "き"],
  },
  {
    char: "入",
    etimology: ["ingresar"],
    sounds: ["入る", "いれる", "にゅう", "じゅ"],
  },
  {
    char: "効",
    etimology: ["intercambio", "fuerza"],
    sounds: ["きく", "こう"],
  },
  {
    char: "再",
    etimology: ["dos", "recipiente"],
    sounds: ["ふたたび", "さい", "さ"],
  },
  {
    char: "元",
    etimology: ["dos", "piernas"],
    sounds: ["もと", "げん", "がん"],
  },
  {
    char: "毎",
    etimology: ["persona", "madre"],
    sounds: ["ごと", "まい"],
  },
  {
    char: "過",
    etimology: ["hueso", "boca", "camino"],
    sounds: ["すぎる", "すごす", "あやまる", "か"],
  },
  {
    char: "良",
    etimology: ["gota", "medida"],
    sounds: ["よい", "いい", "りょう"],
  },
  {
    char: "寄",
    etimology: ["techo", "grande", "fuerza"],
    sounds: ["よる", "よせる", "き"],
  },
  {
    char: "果",
    etimology: ["campo", "árbol"],
    sounds: ["はたす", "はたす", "はてる", "か"],
  },
  {
    char: "回",
    etimology: ["recinto", "boca"],
    sounds: ["まわる", "まわす", "かい"],
  },
  {
    char: "当",
    etimology: ["pequeño", "cobertizo"],
    sounds: ["あたる", "あてる", "とう"],
  },
  {
    char: "心",
    etimology: ["corazón"],
    sounds: ["こころ", "しん"],
  },
  {
    char: "秘",
    etimology: ["espiga", "invocar"],
    sounds: ["ひめる", "ひ"],
  },
  {
    char: "密",
    etimology: ["techo", "serpiente", "montaña"],
    sounds: ["ひそか", "みつ"],
  },
  {
    char: "結",
    etimology: ["hilo", "derecha", "boca"],
    sounds: ["むすぶ", "ゆう", "けつ"],
  },
  {
    char: "婚",
    etimology: ["mujer", "sol", "氏"],
    sounds: ["こん"],
  },
  {
    char: "式",
    etimology: ["estaca", "trabajo"],
    sounds: ["しき"],
  },
  {
    char: "誓",
    etimology: ["hacha", "palabra"],
    sounds: ["ちかう", "せい"],
  },
  {
    char: "永",
    etimology: ["gota", "agua"],
    sounds: ["ながい", "えい"],
  },
  {
    char: "涙",
    etimology: ["agua", "desolación"],
    sounds: ["なみだ", "るい"],
  },
  {
    char: "場",
    etimology: ["tierra", "sol", "sangre"],
    sounds: ["ば", "じょう"],
  },
  {
    char: "顔",
    etimology: ["antena", "cabeza"],
    sounds: ["かお", "がん"],
  },
  {
    char: "覆",
    etimology: ["cubrir", "reverso", "camino"],
    sounds: ["おおう", "くつがえる", "ふく"],
  },
  {
    char: "謝",
    etimology: ["palabra", "vientre", "pulgada"],
    sounds: ["あやまる", "しゃ"],
  },
  {
    char: "告",
    etimology: ["buey", "boca"],
    sounds: ["つげる", "こく"],
  },
  {
    char: "娘",
    etimology: ["mujer", "bueno"],
    sounds: ["むすめ", "じょう"],
  },
  {
    char: "者",
    etimology: ["viejo con cabello largo", "sol"],
    sounds: ["もの", "しゃ"],
  },
];

console.log("total kanjis: ", kanjiBase.length);
export default kanjiBase;
