//items tier 1
const gpc = require("./imgs/gpc.png");
const cotaMalha = require("./imgs/cotaMalha.png");
const arcoRecurvo = require('./imgs/arcoRecurvo.png');
const lagrima = require('./imgs/lagrima.png');
const espatula = require('./imgs/espatula.png');
const bastaoGrande = require('./imgs/bastaoGrande.png');
const capaNegatron = require('./imgs/capaNegatron.png');
const cintoGigante = require('./imgs/cintoGigante.png');

//items tier 2
const gumeInfinito = require('./imgs/gumeInfinito.png');
const espadaDivino = require('./imgs/espadaDivino.png');
const pistola = require('./imgs/pistola.png');
const shojin = require('./imgs/shojin.png');
const anjoGuardiao = require('./imgs/anjoGuardiao.png');
const sedenta = require('./imgs/sedenta.png');
const arautoZeke =  require('./imgs/ArautoZeke.png');
const youmuu = require('./imgs/youmuu.png');
const canhaoFumegante = require('./imgs/canhaoFumegante.png');
const guinsoo = require('./imgs/guinsoo.png');
const statikk = require('./imgs/statikk.png');
const dancarina = require('./imgs/dancarina.png');
const armaduraEspinhos = require('./imgs/armaduraEspinhos.png');
const armaduraWarmog = require('./imgs/armaduraWarmog.png');
const darkin = require('./imgs/darkin.png');
const luden = require('./imgs/luden.png');
const seraph = require('./imgs/seraph.png');
const coracaoCongelado = require('./imgs/coracaoCongelado.png');
const quietude = require('./imgs/quietude.png');
const redencao = require('./imgs/redencao.png');
const laminaAmaldicoada = require('./imgs/laminaAmaldicoada.png');
const hidraTitanica = require('./imgs/hidraTitanica.png');
const reiDestruido = require('./imgs/reiDestruido.png');
const rabadon = require('./imgs/rabadon.png');
const solari = require('./imgs/solari.png');
const centelhaIonica = require('./imgs/centelhaIonica.png');
const morellonomicon = require('./imgs/morellonomicon.png');
const yuumi = require('./imgs/yuumi.png');
const efeitoVermelho = require('./imgs/efeitoVermelho.png');
const juramentoCavaleiro = require('./imgs/juramentoCavaleiro.png');
const quebraEspada = require('./imgs/quebraEspada.png');
const garraDragao = require('./imgs/garraDragao.png');
const zefiro = require('./imgs/zefiro.png');
const runnan = require('./imgs/runaan.png');
const malho = require('./imgs/malho.png')
const forcaNatureza = require('./imgs/forcaNatureza.png')

//champs
const aatrox = require('./imgs/campeoes/aatrox.png')
const ahri = require('./imgs/campeoes/ahri.png')
const akali = require('./imgs/campeoes/akali.png')
const anivia = require('./imgs/campeoes/anivia.png')
const ashe = require('./imgs/campeoes/ashe.png')
const aurelionSol = require('./imgs/campeoes/aurelionSol.png')
const blitzcrank = require('./imgs/campeoes/blitzcrank.png')
const brand = require('./imgs/campeoes/brand.png')
const braum = require('./imgs/campeoes/braum.png')
const choGath = require('./imgs/campeoes/choGath.png')
const darius = require('./imgs/campeoes/darius.png')
const draven = require('./imgs/campeoes/draven.png')
const elise = require('./imgs/campeoes/elise.png')
const evelynn = require('./imgs/campeoes/evelynn.png')
const fiora = require('./imgs/campeoes/fiora.png')
const gangplank = require('./imgs/campeoes/gangplank.png')
const garen = require('./imgs/campeoes/garen.png')
const gnar = require('./imgs/campeoes/gnar.png')
const graves = require('./imgs/campeoes/graves.png')
const karthus = require('./imgs/campeoes/karthus.png')
const kassadin = require('./imgs/campeoes/kassadin.png')
const katarina = require('./imgs/campeoes/katarina.png')
const kayle = require('./imgs/campeoes/kayle.png')
const kennen = require('./imgs/campeoes/kennen.png')
const khaZix = require('./imgs/campeoes/khaZix.png')
const kindred = require('./imgs/campeoes/kindred.png')
const leona = require('./imgs/campeoes/leona.png')
const lissandra = require('./imgs/campeoes/lissandra.png')
const lucian = require('./imgs/campeoes/lucian.png')
const lulu = require('./imgs/campeoes/lulu.png')
const missFortune = require('./imgs/campeoes/missFortune.png')
const mordekaiser = require('./imgs/campeoes/mordekaiser.png')
const morgana = require('./imgs/campeoes/morgana.png')
const nidalee = require('./imgs/campeoes/nidalee.png')
const poppy = require('./imgs/campeoes/poppy.png')
const pyke = require('./imgs/campeoes/pyke.png')
const rekSai = require('./imgs/campeoes/rekSai.png')
const rengar = require('./imgs/campeoes/rengar.png')
const sejuani = require('./imgs/campeoes/sejuani.png')
const shen = require('./imgs/campeoes/shen.png')
const shyvana = require('./imgs/campeoes/shyvana.png')
const swain = require('./imgs/campeoes/swain.png')
const tristana = require('./imgs/campeoes/tristana.png')
const varus = require('./imgs/campeoes/varus.png')
const vayne = require('./imgs/campeoes/vayne.png')
const veigar = require('./imgs/campeoes/veigar.png')
const volibear = require('./imgs/campeoes/volibear.png')
const warwick = require('./imgs/campeoes/warwick.png')
const yasuo = require('./imgs/campeoes/yasuo.png')
const zed = require('./imgs/campeoes/zed.png')


const ItensTier2 = {
    "anjoGuardiao": {
      "idItem": 1,
      "nome": "Anjo Guardião",
      "feito": [gpc,cotaMalha],
      "efeito": "Após a morte o usuário ressuscita com 500.0 de Vida",
      "bomEm": [
        {
          "id": 1,
          "url": choGath
        },
        {
          "id": 2,
          "url": pyke
        },
        {
          "id": 3,
          "url": sejuani
        },
        {
          "id": 4,
          "url": shen
        }
  
      ],
      "url": anjoGuardiao
    },
    "arautoZeke": {
      "idItem": 2,
      "nome": "Arauto de Zeke",
      "feito": [gpc,cintoGigante],
      "efeito": "Aliados adjacentes recebem +20.0% de Velocidade de Ataque",
      "bomEm": [
        {
          "id": 1,
          "url": morgana
        },
        {
          "id": 2,
          "url": leona
        },
        {
          "id": 3,
          "url": lulu
        },
        {
          "id": 4,
          "url": lissandra
        },
        {
          "id": 5,
          "url": braum
        },
        {
          "id": 6,
          "url": kindred
        }
        
  
      ],
      "url": arautoZeke
    },
    "espadaDivino": {
      "idItem": 3,
      "nome": "Espada do Divino",
      "feito": [gpc,arcoRecurvo],
      "efeito": "A cada segundo, o usuário tem 5.0% de chance de receber 100% de Acerto Crítico",
      "bomEm": [
        {
          "id": 1,
          "url": ashe
        },
        {
          "id": 2,
          "url": vayne
        },
        {
          "id": 3,
          "url": rengar
        },
        {
          "id": 4,
          "url": draven
        },
        {
          "id": 5,
          "url": zed
        }
  
      ],
      "url": espadaDivino
    },
    "armaduraEspinhos": {
      "idItem": 4,
      "nome": "Armadura de Espinhos",
      "feito": [cotaMalha,cotaMalha],
      "efeito": "Reflete 25.0% do dano sofrido por ataques",
      "bomEm": [
        {
          "id": 1,
          "url": choGath
        },
        {
          "id": 2,
          "url": warwick
        },
        {
          "id": 3,
          "url": volibear
        },
        {
          "id": 4,
          "url": rekSai
        }
  
      ],
      "url": armaduraEspinhos
    },
    "armaduraWarmog": {
      "idItem": 5,
      "nome": "Armadura De Warmog",
      "feito": [cintoGigante,cintoGigante],
      "efeito": "Usuário regenera 2.5% da Vida máxima por segundo",
      "bomEm": [
        {
          "id": 1,
          "url": choGath
        },
        {
          "id": 2,
          "url": warwick
        },
        {
          "id": 3,
          "url": volibear
        },
        {
          "id": 4,
          "url": rekSai
        }
  
      ],
      "url": armaduraWarmog
    },
    "darkin": {
      "idItem": 6,
      "nome": "Darkin",
      "feito": [lagrima,espatula],
      "efeito": "Usuário também é um Demônio",
      "bomEm": [
        
  
      ],
      "url": darkin
    },
    "gumeInfinito": {
      "idItem": 7,
      "nome": "Gume do Infinito",
      "feito": [gpc,gpc],
      "efeito": " Acertos Críticos causam +100.0% de dano",
      "bomEm": [
        {
          "id": 1,
          "url": ashe
        },
        {
          "id": 2,
          "url": vayne
        },
        {
          "id": 3,
          "url": rengar
        },
        {
          "id": 4,
          "url": draven
        },
        {
          "id": 5,
          "url": khaZix
        },
        {
          "id": 6,
          "url": zed
        }
      ],
      "url": gumeInfinito
    },
    "pistola": {
      "idItem": 8,
      "nome": "Pistola Laminar Hextec",
      "feito": [gpc,bastaoGrande],
      "efeito": "Cura em 25.0% de todo o dano causado",
      "bomEm": [
        {
          "id": 1,
          "url": evelynn
        },
        {
          "id": 2,
          "url": swain
        },
        {
          "id": 3,
          "url": akali
        },
        {
          "id": 4,
          "url": katarina
        },
        {
          "id": 5,
          "url": garen
        }
      ],
      "url": pistola
    },
    "shojin": {
      "idItem": 9,
      "nome": "Lança de Shojin",
      "feito": [gpc,lagrima],
      "efeito": "Depois de conjurar, o usuário recebe 20.0% da sua Mana máxima por ataque",
      "bomEm": [
        {
          "id": 1,
          "url": akali
        },
        {
          "id": 2,
          "url": ahri
        },
        {
          "id": 3,
          "url": sejuani
        },
        {
          "id": 4,
          "url": lulu
        },
        {
          "id": 5,
          "url": aurelionSol
        },
        {
          "id": 6,
          "url": pyke
        }
  
      ],
      "url": shojin
    },
    "sedenta": {
      "idItem": 10,
      "nome": "A Sedenta por Sangue",
      "feito": [gpc,capaNegatron],
      "efeito": "Usuário adiquiri uma nova origem de demonio",
      "bomEm": [
        {
          "id": 1,
          "url": nidalee
        },
        {
          "id": 2,
          "url": draven
        },
        {
          "id": 3,
          "url": aatrox
        }
      ],
      "url": sedenta
    },
    "youmuu": {
      "idItem": 11,
      "nome": "Lâmina Fantasma de Youmuu",
      "feito": [gpc,espatula],
      "efeito": "Usuário também é um Assassino",
      "bomEm": [
        
  
      ],
      "url": youmuu
    },
    "canhaoFumegante": {
      "idItem": 12,
      "nome": "Canhão Fumegante",
      "feito": [arcoRecurvo,arcoRecurvo],
      "efeito": "Os ataques do usuário não podem ser esquivados. Alcance de Ataque dobrado",
      "bomEm": [
        {
          "id": 1,
          "url": vayne
        },
        {
          "id": 2,
          "url": volibear
        },
        {
          "id": 3,
          "url": draven
        }
      ],
      "url": canhaoFumegante
    },
    "guinsoo": {
      "idItem": 13,
      "nome": "Lâmina da Fúria de Guinsoo",
      "feito": [arcoRecurvo,bastaoGrande],
      "efeito": "Ataques concedem 3.0% de Velocidade de Ataque. Acumula infinitamente",
      "bomEm": [
        {
          "id": 1,
          "url": kayle
        },
        {
          "id": 2,
          "url": kassadin
        },
        {
          "id": 3,
          "url": veigar
        },{
          "id": 4,
          "url": ahri
        },
        {
          "id": 5,
          "url": aurelionSol
        },
        {
          "id": 6,
          "url": lucian
        }
      ],
      "url": guinsoo
    },
    "statikk": {
      "idItem": 14,
      "nome": "Faca Statikk",
      "feito": [arcoRecurvo,lagrima],
      "efeito": "O 3º ataque causa 100.0 de Dano Mágico de dispersão",
      "bomEm": [
        {
          "id": 1,
          "url": tristana
        },
        {
          "id": 2,
          "url": volibear
        },
        {
          "id": 3,
          "url": lucian
        }
      ],
      "url": statikk
    },
    "dancarina": {
      "idItem": 15,
      "nome": "Dançarina Fantasma",
      "feito": [arcoRecurvo,cotaMalha],
      "efeito": "Usuário esquiva de todos os Acertos Críticos",
      "bomEm": [
        {
          "id": 1,
          "url": garen
        },
        {
          "id": 2,
          "url": shen
        },
        {
          "id": 3,
          "url": shyvana
        },
        {
          "id": 4,
          "url": volibear
        },
        {
          "id": 5,
          "url": darius
        },
        {
          "id": 6,
          "url": gnar
        }
      ],
      "url": dancarina
    },
    "laminaAmaldicoada": {
      "idItem": 16,
      "nome": "Lâmina Amaldiçoada",
      "feito": [arcoRecurvo, capaNegatron],
      "efeito": "Ataques têm uma chance baixa de Diminuir (reduzir o nível de estrela do inimigo em 1)",
      "bomEm": [
        {
          "id": 1,
          "url": tristana
        },
        {
          "id": 2,
          "url": graves
        },
        {
          "id": 3,
          "url": volibear
        },
        {
          "id": 4,
          "url": lucian
        }
      ],
      "url": laminaAmaldicoada
    },
    "hidraTitanica": {
      "idItem": 17,
      "nome": "Hidra Titânica",
      "feito": [arcoRecurvo, cintoGigante],
      "efeito": "Ataques causam dano de dispersão de 10.0% da Vida máxima do usuário",
      "bomEm": [
        {
          "id": 1,
          "url": choGath
        },
        {
          "id": 2,
          "url": elise
        },
        {
          "id": 3,
          "url": nidalee
        },
        {
          "id": 4,
          "url": shen
        },
        {
          "id": 5,
          "url": shyvana
        },
        {
          "id": 6,
          "url": gnar
        },
        {
          "id": 7,
          "url": aatrox
        }
      ],
      "url": hidraTitanica
    },
    "reiDestruido": {
      "idItem": 18,
      "nome": "Espada do Rei Destruído",
      "feito": [arcoRecurvo, espatula],
      "efeito": "Usuário também é um Mestre das Lâminas",
      "bomEm": [
       {

       }
      ],
      "url": reiDestruido
    },
    "rabadon": {
      "idItem": 19,
      "nome": "Capuz da Morte de Rabadon",
      "feito": [bastaoGrande, bastaoGrande],
      "efeito": "O atributo de dano com habilidades do usuário é amplificado em 50.0%",
      "bomEm": [
        {
          "id": 1,
          "url": morgana
        },
        {
          "id": 2,
          "url": karthus
        },
        {
          "id": 3,
          "url": anivia
        },
        {
          "id": 4,
          "url": brand
        },
        {
          "id": 5,
          "url": ahri
        },
        {
          "id": 6,
          "url": aurelionSol
        }
      ],
      "url": rabadon
    },
    "luden": {
      "idItem": 20,
      "nome": "Eco de Luden",
      "feito": [bastaoGrande, lagrima],
      "efeito": "Habilidades causam 100.0 de dano de dispersão ao contato",
      "bomEm": [
        {
          "id": 1,
          "url": anivia
        },
        {
          "id": 2,
          "url": katarina
        },
        {
          "id": 3,
          "url": brand
        },
        {
          "id": 4,
          "url": akali
        },
        {
          "id": 5,
          "url": garen
        },
        {
          "id": 6,
          "url": ahri
        }
      ],
      "url": luden
    },
    "solari": {
      "idItem": 21,
      "nome": "Medalhão dos Solari de Ferro",
      "feito": [bastaoGrande, cotaMalha],
      "efeito": "No início do combate, todos os aliados adjacentes recebem um escudo de 200.0",
      "bomEm": [
        {
          "id": 1,
          "url": morgana
        },
        {
          "id": 2,
          "url": leona
        },
        {
          "id": 3,
          "url": lulu
        },
        {
          "id": 4,
          "url": lissandra
        },
        {
          "id": 5,
          "url": braum
        },
        {
          "id": 6,
          "url": kindred
        }
      ],
      "url": solari
    },
    "centelhaIonica": {
      "idItem": 22,
      "nome": "Centelha Iônica",
      "feito": [bastaoGrande, capaNegatron],
      "efeito": "Sempre que um inimigo conjurar uma habilidade, ele sofre 200.0 de dano",
      "bomEm": [
        {
          "id": 1,
          "url": morgana
        },
        {
          "id": 2,
          "url": leona
        },
        {
          "id": 3,
          "url": lulu
        },
        {
          "id": 4,
          "url": lissandra
        },
        {
          "id": 5,
          "url": braum
        },
        {
          "id": 6,
          "url": kindred
        }
      ],
      "url": centelhaIonica
    },
    "morellonomicon": {
      "idItem": 23,
      "nome": "Morellonomicon",
      "feito": [bastaoGrande, cintoGigante],
      "efeito": "Habilidades causam dano de queimadura igual a 5.0% da Vida máxima do inimigo por segundo",
      "bomEm": [
        {
          "id": 1,
          "url": anivia
        },
        {
          "id": 2,
          "url": katarina
        },
        {
          "id": 3,
          "url": brand
        },
        {
          "id": 4,
          "url": kennen
        },
        {
          "id": 5,
          "url": garen
        },
        {
          "id": 6,
          "url": lucian
        }
      ],
      "url": morellonomicon
    },
    "yuumi": {
      "idItem": 24,
      "nome": "Yuumi",
      "feito": [bastaoGrande, espatula],
      "efeito": "Usuário também é um Feiticeiro",
      "bomEm": [
        {

        }
      ],
      "url": yuumi
    },
    "seraph": {
      "idItem": 25,
      "nome": "Abraço de Seraph",
      "feito": [lagrima, lagrima],
      "efeito": "Recupera 20.0 de Mana cada vez que uma habilidade é conjurada",
      "bomEm": [
        {
          "id": 1,
          "url": akali
        },
        {
          "id": 2,
          "url": ahri
        },
        {
          "id": 3,
          "url": sejuani
        },
        {
          "id": 4,
          "url": lulu
        },
        {
          "id": 5,
          "url": aurelionSol
        },
        {
          "id": 6,
          "url": pyke
        }
      ],
      "url": seraph
    },
    "coracaoCongelado": {
      "idItem": 26,
      "nome": "Coração Congelado",
      "feito": [lagrima, cotaMalha],
      "efeito": "Inimigos adjacentes perdem 20.0% de Velocidade de Ataque",
      "bomEm": [
        {
          "id": 1,
          "url": choGath
        },
        {
          "id": 2,
          "url": poppy
        },
        {
          "id": 3,
          "url": leona
        },
        {
          "id": 4,
          "url": braum
        }
      ],
      "url": coracaoCongelado
    },
    "quietude": {
      "idItem": 27,
      "nome": "Quietude",
      "feito": [lagrima, capaNegatron],
      "efeito": "Ataques têm alta chance de causarem Silêncio",
      "bomEm": [
        {
          "id": 1,
          "url": tristana
        },
        {
          "id": 2,
          "url": graves
        },
        {
          "id": 3,
          "url": volibear
        },
        {
          "id": 4,
          "url": lucian
        }        
      ],
      "url": quietude
    },
    "redencao": {
      "idItem": 28,
      "nome": "Rendeção",
      "feito": [lagrima, cintoGigante],
      "efeito": "Ao morrer, cura todos os aliados próximos em 1000.0 de Vida",
      "bomEm": [
        {
          "id": 1,
          "url": choGath
        },
        {
          "id": 2,
          "url": poppy
        },
        {
          "id": 3,
          "url": leona
        },
        {
          "id": 4,
          "url": braum
        }
      ],
      "url": redencao
    },
    "quebraEspada": {
      "idItem": 29,
      "nome": "Quebra-Espada",
      "feito": [cotaMalha, capaNegatron],
      "efeito": "Ataques têm uma chance de desarmar",
      "bomEm": [
        {
          "id": 1,
          "url": tristana
        },
        {
          "id": 2,
          "url": graves
        },
        {
          "id": 3,
          "url": volibear
        },
        {
          "id": 4,
          "url": lucian
        }
      ],
      "url": quebraEspada
    },
    "efeitoVermelho": {
      "idItem": 30,
      "nome": "Efeito Vermelho",
      "feito": [cotaMalha, cintoGigante],
      "efeito": "Ataques causam 2.5% de dano de queimadura",
      "bomEm": [
        {
          "id": 1,
          "url": tristana
        },
        {
          "id": 2,
          "url": graves
        },
        {
          "id": 3,
          "url": volibear
        },
        {
          "id": 4,
          "url": lucian
        }
      ],
      "url": efeitoVermelho
    },
    "juramentoCavaleiro": {
      "idItem": 31,
      "nome": "Juramento do Cavaleiro",
      "feito": [cotaMalha, espatula],
      "efeito": "Usuário também é um Cavaleiro",
      "bomEm": [
        {

        }
      ],
      "url": juramentoCavaleiro
    },
    "garraDragao": {
      "idItem": 32,
      "nome": "Garra do Dragão",
      "feito": [capaNegatron, capaNegatron],
      "efeito": "Recebe 83.0% de Resistência a Dano Mágico",
      "bomEm": [
        {
          "id": 1,
          "url": poppy
        },
        {
          "id": 2,
          "url": mordekaiser
        },
        {
          "id": 3,
          "url": shen
        },
        {
          "id": 4,
          "url": sejuani
        },
        {
          "id": 5,
          "url": darius
        },
        {
          "id": 6,
          "url": gnar
        }
      ],
      "url": garraDragao
    },
    "zefiro": {
      "idItem": 33,
      "nome": "Zéfiro",
      "feito": [capaNegatron, cintoGigante],
      "efeito": "No início do combate, bane um inimigo por 5.0s",
      "bomEm": [
        {
          "id": 1,
          "url": morgana
        },
        {
          "id": 2,
          "url": leona
        },
        {
          "id": 3,
          "url": lulu
        },
        {
          "id": 4,
          "url": lissandra
        },
        {
          "id": 5,
          "url": braum
        },
        {
          "id": 6,
          "url": kindred
        }
      ],
      "url": zefiro
    },
    "runnan": {
      "idItem": 34,
      "nome": "Furacão de Runnan",
      "feito": [capaNegatron, espatula],
      "efeito": "Ataques atingem 2.0 inimigos adicionais. Esses ataques adicionais causam 50.0% de dano", 
      "bomEm": [
        {
          "id": 1,
          "url": ashe
        },
        {
          "id": 2,
          "url": vayne
        }
      ],
      "url": runnan
    },
    "malho": {
      "idItem": 35,
      "nome": "Malho Congelado",
      "feito": [espatula, cintoGigante],
      "efeito": "Usuário também é um Glacial",
      "bomEm": [
        {

        }
      ],
      "url": malho
    },
    "forcaNatureza": {
      "idItem": 36,
      "nome": "Força da Natureza",
      "feito": [espatula, espatula],
      "efeito": "Recebe +1.0 de tamanho da equipe",
      "bomEm": [
       {

       }
      ],
      "url": forcaNatureza
    },
  
  };

const Campeoes = {

    "aatrox":{
      "idCampeao": 1,
      "nome": "Aatrox",
      "origens":["Demonio"],
      "url": aatrox,
      "classes":["Mestre das Lâminas"],
      "mr":20,
      "dps":42.3,
      "armor":25,
      "custo":3
    },
    "ahri":{
      "idCampeao": 2,
      "nome": "Ahri",
      "origens":["Selvagem"],
      "url": ahri,
      "classes":["Feiticeiro"],
      "mr":20,
      "dps":27.5,
      "armor":20,
      "custo":2
    },
    "akali":{
      "idCampeao": 3,
      "nome": "Akali",
      "origens":["Ninja"],
      "url": akali,
      "classes":["Assasino"],
      "mr":20,
      "dps":49.0,
      "armor":20,
      "custo":3
    },
    "anivia":{
      "idCampeao": 4,
      "nome": "Anivia",
      "origens":["Glacial"],
      "url": anivia,
      "classes":["Elementalista"],
      "mr":20,
      "dps":24.0,
      "armor":20,
      "custo":5
    },
    "ashe":{
      "idCampeao": 5,
      "nome": "Ashe",
      "origens":["Glacial"],
      "url": ashe,
      "classes":["Patrulheiro"],
      "mr":20,
      "dps":42.0,
      "armor":20,
      "custo":3
    },
    "aurelionSol":{
      "idCampeao": 6,
      "nome": "Aurelion Sol",
      "origens":["Dragão"],
      "url": aurelionSol,
      "classes":["Feiticeiro"],
      "mr":20,
      "dps":24.0,
      "armor":20,
      "custo":4
    },
    "blitzcrank":{
      "idCampeao": 7,
      "nome": "Blitzcrank",
      "origens":["Robô"],
      "url": blitzcrank,
      "classes":["Lutador"],
      "mr":20,
      "dps":25.0,
      "armor":35,
      "custo":2
    },
    "brand":{
      "idCampeao": 8,
      "nome": "Brand",
      "origens":["Demônio"],
      "url": brand,
      "classes":["Elementalista"],
      "mr":20,
      "dps":36.0,
      "armor":25,
      "custo":4
    },
    "braum":{
      "idCampeao": 9,
      "nome": "Braum",
      "origens":["Glacial"],
      "url": braum,
      "classes":["Guardião"],
      "mr":20,
      "dps":24.0,
      "armor":25,
      "custo":2
    },
    "choGath":{
      "idCampeao":10,
      "nome": "Cho'Gath",
      "origens":["Vastinata"],
      "url": choGath,
      "classes":["Lutador"],
      "mr":20,
      "dps":38.5,
      "armor":20,
      "custo":4
    },
    "darius":{
      "idCampeao": 11,
      "nome": "Darius",
      "origens":["Imperial"],
      "url": darius,
      "classes":["Cavaleiro"],
      "mr":20,
      "dps":25.0,
      "armor":25,
      "custo":1
    },
    "draven":{
      "idCampeao": 12,
      "nome": "Draven",
      "origens":["Imperial"],
      "url": draven,
      "classes":["Mestre das Lâminas"],
      "mr":20,
      "dps":63.8,
      "armor":25,
      "custo":4
    },
    "elise":{
      "idCampeao": 13,
      "nome": "Elise",
      "origens":["Demônio"],
      "url": elise,
      "classes":["Metamorfo"],
      "mr":20,
      "dps":24.0,
      "armor":25,
      "custo":2
    },
    "evelynn":{
      "idCampeao": 14,
      "nome": "Evelynn",
      "origens":["Demônio"],
      "url": evelynn,
      "classes":["Assassino"],
      "mr":20,
      "dps":30.0,
      "armor":20,
      "custo":3
    },
    "fiora":{
      "idCampeao": 15,
      "nome": "Fiora",
      "origens":["Nobre"],
      "url": fiora,
      "classes":["Mestre das Lâminas"],
      "mr":20,
      "dps":28.0,
      "armor":25,
      "custo":1
    },
    "gangplank":{
      "idCampeao": 16,
      "nome": "Gankplank",
      "origens":["Pirata"],
      "url": gangplank,
      "classes":["Pistoleiro", "Mestre das Lâminas"],
      "mr":20,
      "dps":33.0,
      "armor":20,
      "custo":3
    },
    "garen":{
      "idCampeao": 17,
      "nome": "Garen",
      "origens":["Nobre"],
      "url": garen,
      "classes":["Cavaleiro"],
      "mr":20,
      "dps":30.3,
      "armor":35,
      "custo":1
    },
    "gnar":{
      "idCampeao": 18,
      "nome": "Gnar",
      "origens":["Selvagem","Yordle"],
      "url": gnar,
      "classes":["Metamorfo"],
      "mr":20,
      "dps":31.5,
      "armor":35,
      "custo":4
    },
    "graves":{
      "idCampeao": 19,
      "nome": "Graves",
      "origens":["Pirata"],
      "url": graves,
      "classes":["Pistoleiro"],
      "mr":20,
      "dps":27.5,
      "armor":20,
      "custo":1
    },
    "karthus":{
      "idCampeao": 20,
      "nome": "Karthus",
      "origens":["Fantasma"],
      "url": karthus,
      "classes":["Feiticeiro"],
      "mr":20,
      "dps":42.3,
      "armor":25,
      "custo":5
    },
    "kassadin":{
      "idCampeao": 21,
      "nome": "Kassadin",
      "origens":["Vastinata"],
      "url": kassadin,
      "classes":["Feiticeiro"],
      "mr":20,
      "dps":29.3,
      "armor":25,
      "custo":1
    },
    "katarina":{
      "idCampeao": 22,
      "nome": "Katarina",
      "origens":["Imperial"],
      "url": katarina,
      "classes":["Assassino"],
      "mr":20,
      "dps":32.5,
      "armor":20,
      "custo":3
    },
    "kayle":{
      "idCampeao": 23,
      "nome": "Kayle",
      "origens":["Nobre"],
      "url": kayle,
      "classes":["Cavaleiro"],
      "mr":20,
      "dps":77.0,
      "armor":35,
      "custo":5
    },
    "kennen":{
      "idCampeao": 24,
      "nome": "Kennen",
      "origens":["Ninja", "Yordle"],
      "url": kennen,
      "classes":["Elementalista"],
      "mr":20,
      "dps":36.0,
      "armor":20,
      "custo":3
    },
    "khaZix":{
      "idCampeao": 25,
      "nome": "Kha'Zix",
      "origens":["Vastinata"],
      "url": khaZix,
      "classes":["Assassino"],
      "mr":20,
      "dps":30.0,
      "armor":20,
      "custo":1
    },
    "kindred":{
      "idCampeao": 26,
      "nome": "Kindred",
      "origens":["Fantasma"],
      "url": kindred,
      "classes":["Patrulheiro"],
      "mr":20,
      "dps":35.8,
      "armor":20,
      "custo":4
    },
    "leona":{
      "idCampeao": 27,
      "nome": "Leona",
      "origens":["Nobre"],
      "url": leona,
      "classes":["Guardião"],
      "mr":20,
      "dps":24.8,
      "armor":55,
      "custo":4
    },
    "lissandra":{
      "idCampeao": 28,
      "nome": "Lissandra",
      "origens":["Glacial"],
      "url": lissandra,
      "classes":["Elementalista"],
      "mr":20,
      "dps":24.0,
      "armor":20,
      "custo":2
    },
    "lucian":{
      "idCampeao": 29,
      "nome": "Lucian",
      "origens":["Nobre"],
      "url": lucian,
      "classes":["Pistoleiro"],
      "mr":20,
      "dps":36.0,
      "armor":25,
      "custo":2
    },
    "lulu":{
      "idCampeao": 30,
      "nome": "Lulu",
      "origens":["Yordle"],
      "url": lulu,
      "classes":["Feiticeiro"],
      "mr":20,
      "dps":30.0,
      "armor":25,
      "custo":2
    },
    "missFortune":{
      "idCampeao": 31,
      "nome": "Miss Fortune",
      "origens":["Pirata"],
      "url": missFortune,
      "classes":["Pistoleiro"],
      "mr":20,
      "dps":56.3,
      "armor":20,
      "custo":5
    },
    "mordekaiser":{
      "idCampeao": 32,
      "nome": "Mordekaise",
      "origens":["Fantasma"],
      "url": mordekaiser,
      "classes":["Cavaleiro"],
      "mr":20,
      "dps":25.0,
      "armor":35,
      "custo":1
    },
    "morgana":{
      "idCampeao": 33,
      "nome": "Morgana",
      "origens":["Demônio"],
      "url": morgana,
      "classes":["Feiticeiro"],
      "mr":20,
      "dps":30.0,
      "armor":20,
      "custo":3
    },
    "nidalee":{
      "idCampeao": 34,
      "nome": "Nidalee",
      "origens":["Selvagem"],
      "url": nidalee,
      "classes":["Metamorfo"],
      "mr":20,
      "dps":32.5,
      "armor":20,
      "custo":1
    },
    "poppy":{
      "idCampeao": 35,
      "nome": "Poppy",
      "origens":["Yordle"],
      "url": poppy,
      "classes":["Cavaleiro"],
      "mr":20,
      "dps":25.0,
      "armor":20,
      "custo":3
    },
    "pyke":{
      "idCampeao":36,
      "nome": "Pyke",
      "origens":["Pirata"],
      "url": pyke,
      "classes":["Assasino"],
      "mr":20,
      "dps":33.0,
      "armor":25,
      "custo":4
    },  
    "rekSai":{
      "idCampeao": 37,
      "nome": "Rek'Sai",
      "origens":["Vastinata"],
      "url": rekSai,
      "classes":["Lutador"],
      "mr":20,
      "dps":26.0,
      "armor":20,
      "custo":2
    },
    "rengar":{
      "idCampeao": 38,
      "nome": "Rengar",
      "origens":["Selvagem"],
      "url": rengar,
      "classes":["Assassino"],
      "mr":20,
      "dps":30.3,
      "armor":20,
      "custo":3
    },
    "sejuani":{
      "idCampeao": 39,
      "nome": "Sejuani",
      "origens":["Glacial"],
      "url": sejuani,
      "classes":["Cavaleiro"],
      "mr":20,
      "dps":24.8,
      "armor":35,
      "custo":4
    },
    "shen":{
      "idCampeao": 40,
      "nome": "Shen",
      "origens":["Ninja"],
      "url": shen,
      "classes":["Mestre das Lâminas"],
      "mr":20,
      "dps":33.0,
      "armor":30,
      "custo":2
    },
    "shyvana":{
      "idCampeao": 41,
      "nome": "Shyvana",
      "origens":["Dragão"],
      "url": shyvana,
      "classes":["Metamorfo"],
      "mr":20,
      "dps":32.5,
      "armor":20,
      "custo":3
    },
    "swain":{
      "idCampeao": 42,
      "nome": "Swain",
      "origens":["Imperial", "Demônio"],
      "url": swain,
      "classes":["Metamorfo"],
      "mr":20,
      "dps":42.3,
      "armor":25,
      "custo":5
    },
    "tristana":{
      "idCampeao": 43,
      "nome": "Tristana",
      "origens":["Yordle"],
      "url": tristana,
      "classes":["Patrulheiro"],
      "mr":20,
      "dps":32.5,
      "armor":20,
      "custo":1
    },
    "varus":{
      "idCampeao": 44,
      "nome": "Varus",
      "origens":["Demônio"],
      "url": varus,
      "classes":["Patrulheiro"],
      "mr":20,
      "dps":35.0,
      "armor":25,
      "custo":2
    },
    "vayne":{
      "idCampeao": 45,
      "nome": "Vayne",
      "origens":["Nobre"],
      "url": vayne,
      "classes":["Patrulheiro"],
      "mr":20,
      "dps":27.0,
      "armor":25,
      "custo":1
    },
    "veigar":{
      "idCampeao": 46,
      "nome": "Veigar",
      "origens":["Yordle"],
      "url": veigar,
      "classes":["Feiticeiro"],
      "mr":20,
      "dps":24.8,
      "armor":20,
      "custo":3
    },
    "volibear":{
      "idCampeao": 47,
      "nome": "Volibear",
      "origens":["Glacial"],
      "url": volibear,
      "classes":["Lutador"],
      "mr":20,
      "dps":37.5,
      "armor":35,
      "custo":3
    },
    "warwick":{
      "idCampeao": 48,
      "nome": "Warwick",
      "origens":["Selvagem"],
      "url": warwick,
      "classes":["Lutador"],
      "mr":20,
      "dps":30.0,
      "armor":30,
      "custo":1
    },
    "yasuo":{
      "idCampeao": 49,
      "nome": "Yasuo",
      "origens":["Exilado"],
      "url": yasuo,
      "classes":["Mestre das Lâminas"],
      "mr":20,
      "dps":65.0,
      "armor":35,
      "custo":5
    },
    "zed":{
      "idCampeao": 50,
      "nome": "Zed",
      "origens":["Ninja"],
      "url": zed,
      "classes":["Assassino"],
      "mr":20,
      "dps":33.0,
      "armor":25,
      "custo":2
    },
  
  
  };

const ItensTier1 = {
  "lagrima":{
    "id": 1,
    "efeito":"+20 Mana para o usuario",
    "url": lagrima,
    "combinacoes":[
      [gpc,shojin,"shojin","Lança de Shojin"],
      [arcoRecurvo,statikk,"statikk","Faca Statikk"],
      [bastaoGrande,luden,"luden","Eco de Luden"],
      [lagrima,seraph,"seraph","Abraço de Seraph"],
      [cotaMalha,coracaoCongelado,"coracaoCongelado","Coração Congelado"],
      [capaNegatron,quietude,"quietude","Quietude"],
      [cintoGigante,redencao,"redencao","Redenção"],
      [espatula,darkin,"darkin","Darkin"]
    ],
  },
  "gpc":{
    "id": 2,
    "efeito":"+20 de dano de ataque para o usuario",
    "url": gpc,
    "combinacoes":[
      [gpc,gumeInfinito,"gumeInfinito","Gume do Infinito"],
      [arcoRecurvo,espadaDivino,"espadaDivino","Espada do Divino"],
      [bastaoGrande,pistola,"pistola","Pistola Laminar Hextec"],
      [lagrima,shojin,"shojin","Lança de shojin"],
      [cotaMalha,anjoGuardiao,"anjoGuardiao","Anjo Guardião"],
      [capaNegatron,sedenta,"sedenta","A sedenta por sangue"],
      [cintoGigante,arautoZeke,"arautoZeke","Arauto de Zeke"],
      [espatula,youmuu,"youmuu","Lâmina Fantasma de Youmuu"]
    ],
  },
  "arcoRecurvo":{
    "id": 3,
    "efeito":"+15% Velocidade de ataque para o usuario",
    "url": arcoRecurvo,
    "combinacoes":[
      [gpc,espadaDivino,"espadaDivino","Espada do Divino"],
      [arcoRecurvo,canhaoFumegante,"canhaoFumegante","Canhão Fumegante"],
      [bastaoGrande,guinsoo,"guinsoo","Lâmina da Fúria de Guinsoo"],
      [lagrima,statikk,"statikk","Faca Statikk"],
      [cotaMalha,dancarina,"dancarina","Dançarina Fantasma"],
      [capaNegatron,laminaAmaldicoada,"laminaAmaldicoada","Lamina Amaldiçoada"],
      [cintoGigante,hidraTitanica,"hidraTitanica","Hidra Titanica"],
      [espatula,reiDestruido,"reiDestruido","Espada do rei destruido"]
    ],
  },
  "bastaoGrande":{
    "id": 4,
    "efeito":"+20% Dano com habilidades para o usuario",
    "url": bastaoGrande,
    "combinacoes":[
      [gpc,pistola,"pistola","Pistola Laminar Hextec"],
      [arcoRecurvo,guinsoo,"guinsoo","Lâmina da Fúria de Guinsoo"],
      [bastaoGrande,rabadon,"rabadon","Capuz da morte de Rabadon"],
      [lagrima,luden,"luden","Eco de Luden"],
      [cotaMalha,solari,"solari","Medalhão dos Solari de ferro"],
      [capaNegatron,centelhaIonica,"centelhaIonica","Centelha Iônica"],
      [cintoGigante,morellonomicon,"morellonomicon","Morellonomicon"],
      [espatula,yuumi,"yuumi","Yuumi"]
    ],
  },
  "cotaMalha":{
    "id": 5,
    "efeito":"+20 Armadura para o usuario",
    "url": cotaMalha,
    "combinacoes":[
      [gpc,anjoGuardiao,"anjoGuardiao","Anjo Guardião"],
      [arcoRecurvo,dancarina,"dancarina","Dançarina Fantasma"],
      [bastaoGrande,solari,"solari","Medalhão dos Solari de ferro"],
      [lagrima,coracaoCongelado,"coracaoCongelado","Coração Congelado"],
      [cotaMalha,armaduraEspinhos,"armaduraEspinhos","Armadura de Espinhos"],
      [capaNegatron,quebraEspada,"quebraEspada","Quebra-Espada"],
      [cintoGigante,efeitoVermelho,"efeitoVermelho","Efeito Vermelho"],
      [espatula,juramentoCavaleiro,"juramentoCavaleiro","Juramento do Cavaleiro"]
    ],
  },
  "capaNegatron":{
    "id": 6,
    "efeito":"+20 Resistência mágica para o usuario",
    "url": capaNegatron,
    "combinacoes":[
      [gpc,sedenta,"sedenta","A sedenta por sangue"],
      [arcoRecurvo,laminaAmaldicoada,"laminaAmaldicoada","Lamina Amaldiçoada"],
      [bastaoGrande,centelhaIonica,"centelhaIonica","Centelha Iônica"],
      [lagrima,quietude,"quietude","Quietude"],
      [cotaMalha,quebraEspada,"quebraEspada","Quebra-Espada"],
      [capaNegatron,garraDragao,"garraDragao","Garra do Dragão"],
      [cintoGigante,zefiro,"zefiro","Zéfiro"],
      [espatula,runnan,"runnan","Furacão de Runnan"]
    ],
  },
  "cintoGigante":{
    "id": 7,
    "efeito":"+200 Vida para o usuario",
    "url": cintoGigante,
    "combinacoes":[
      [gpc,arautoZeke,"arautoZeke","Arauto de Zeke"],
      [arcoRecurvo,hidraTitanica,"hidraTitanica","Hidra Titanica"],
      [bastaoGrande,morellonomicon,"morellonomicon","Morellonomicon"],
      [lagrima,redencao,"redencao","Redenção"],
      [cotaMalha,efeitoVermelho,"efeitoVermelho","Efeito Vermelho"],
      [capaNegatron,zefiro,"zefiro","Zéfiro"],
      [cintoGigante,armaduraWarmog,"armaduraWarmog","Armadura de Warmog"],
      [espatula,malho,"malho","Malho Congelado"]
    ],
  },

  "espatula":{
    "id": 8,
    "efeito":"A espátula sozinha não tem efeito algum, mas combinada a outros itens pode ser a chave para a viória",
    "url": espatula,
    "combinacoes":[
      [gpc,youmuu, "youmuu", "Lâmina Fantasma de Youmuu"],
      [arcoRecurvo,reiDestruido,"reiDestruido","Espada do Rei Destruído"],
      [bastaoGrande,yuumi,"yuumi","Yuumi"],
      [lagrima,darkin,"darkin","Darkin"],
      [cotaMalha,juramentoCavaleiro,"juramentoCavaleiro","Juramento do Cavaleiro"],
      [capaNegatron,runnan,"runnan","Furacão Runnan"],
      [cintoGigante,malho,"malho","Malho Congelado"],
      [espatula,forcaNatureza,"forcaNatureza","Força da Natureza"]
    ],
  },
}


 export const lista = {
    itens:[
      {
        "id":1,
        "url":espadaDivino,
        "nome":"espadaDivino",
        "texto":"Espada do Divino"
      },
      {
        "id":2,
        "url":armaduraEspinhos,
        "nome":"armaduraEspinhos",
        "texto":"Armadura de Espinhos"
      },
      {
        "id":3,
        "url":armaduraWarmog,
        "nome":"armaduraWarmog",
        "texto":"Armadura De Warmog"
      },
      {
        "id":4,
        "url":darkin,
        "nome":"darkin",
        "texto":"Darkin"
      },
      {
        "id":5,
        "url":anjoGuardiao,
        "nome":"anjoGuardiao",
        "texto":"Anjo Guardião"
      },
      {
        "id":6,
        "url":arautoZeke,
        "nome":"arautoZeke",
        "texto":"Arauto de Zeke"
      },
      {
        "id":7,
        "url":gumeInfinito,
        "nome":"gumeInfinito",
        "texto":"Gume do Infinito"
      },
      {
        "id":8,
        "url":pistola,
        "nome":"pistola",
        "texto":"Pistola Laminar Hextec"
      },
      {
        "id":9,
        "url":shojin,
        "nome":"shojin",
        "texto":"Lança de Shojin"
      },
      {
        "id":10,
        "url":sedenta,
        "nome":"sedenta",
        "texto":"A Sedenta por Sangue"
      },
      {
        "id":11,
        "url":youmuu,
        "nome":"youmuu",
        "texto":"Lâmina Fantasma de Youmuu"
      },
      {
        "id":12,
        "url":canhaoFumegante,
        "nome":"canhaoFumegante",
        "texto":"Canhão Fumegante"
      },
      {
        "id":13,
        "url":guinsoo,
        "nome":"guinsoo",
        "texto":"Lâmina da Fúria de Guinsoo"
      },
      {
        "id":14,
        "url":statikk,
        "nome":"statikk",
        "texto":"Faca Statikk"
      },
      {
        "id":15,
        "url":dancarina,
        "nome":"dancarina",
        "texto":"Dançarina Fantasma"
      },
      {
        "id":16,
        "url":laminaAmaldicoada,
        "nome":"laminaAmaldicoada",
        "texto":"Lâmina Amaldiçoada"
      },
      {
        "id":17,
        "url":hidraTitanica,
        "nome":"hidraTitanica",
        "texto":"Hidra Titânica"
      },
      {
        "id":18,
        "url":reiDestruido,
        "nome":"reiDestruido",
        "texto":"Espado do Rei Destruído"
      },
      {
        "id":19,
        "url":rabadon,
        "nome":"rabadon",
        "texto":"Capuz da Morte de Rabadon"
      },
      {
        "id":20,
        "url":luden,
        "nome":"luden",
        "texto":"Eco de Luden"
      },
      {
        "id":21,
        "url":solari,
        "nome":"solari",
        "texto":"Medalhão dos Solari de Ferro"
      },
      {
        "id":22,
        "url":centelhaIonica,
        "nome":"centelhaIonica",
        "texto":"Centelha Iônica"
      },
      {
        "id":23,
        "url":morellonomicon,
        "nome":"morellonomicon",
        "texto":"Morellonomicon"
      },
      {
        "id":24,
        "url":yuumi,
        "nome":"yuumi",
        "texto":"Yuumi"
      },
      {
        "id":25,
        "url":seraph,
        "nome":"seraph",
        "texto":"Abraço de Seraph"
      },
      {
        "id":26,
        "url":coracaoCongelado,
        "nome":"coracaoCongelado",
        "texto":"Coração Congelado"
      },
      {
        "id":27,
        "url":quietude,
        "nome":"quietude",
        "texto":"Quietude"
      },
      {
        "id":28,
        "url":redencao,
        "nome":"redencao",
        "texto":"Redenção"
      },
      {
        "id":29,
        "url":quebraEspada,
        "nome":"quebraEspada",
        "texto":"Quebra Espada"
      },
      {
        "id":30,
        "url":efeitoVermelho,
        "nome":"efeitoVermelho",
        "texto":"Efeito Vermelho"
      },
      {
        "id":31,
        "url":juramentoCavaleiro,
        "nome":"juramentoCavaleiro",
        "texto":"Juramento do Cavaleiro"
      },
      {
        "id":32,
        "url":garraDragao,
        "nome":"garraDragao",
        "texto":"Garra do Dragão"
      },
      {
        "id":33,
        "url":zefiro,
        "nome":"zefiro",
        "texto":"Zéfiro"
      },
      {
        "id":34,
        "url":runnan,
        "nome":"runnan",
        "texto":"Furacão de Runaan"
      },
      {
        "id":35,
        "url":malho,
        "nome":"malho",
        "texto":"Malho Congelado"
      },
      {
        "id":36,
        "url":forcaNatureza,
        "nome":"forcaNatureza",
        "texto":"Força da Natureza"
      }
    ],
    campeoes:[
      {
        "id":1,
        "url":aatrox,
        "nome":"aatrox",
        "texto":"Aatrox"
      },
      {
        "id":2,
        "url":ahri,
        "nome":"ahri",
        "texto":"Ahri"
      },
      {
        "id":3,
        "url":akali,
        "nome":"akali",
        "texto":"Akali"
      },
      {
        "id":4,
        "url":anivia,
        "nome":"anivia",
        "texto":"Anivia"
      },
      {
        "id":5,
        "url":ashe,
        "nome":"ashe",
        "texto":"Ashe"
      },
      {
        "id":6,
        "url":aurelionSol,
        "nome":"aurelionSol",
        "texto":"Aurelion Sol"
      },
      {
        "id":7,
        "url":blitzcrank,
        "nome":"blitzcrank",
        "texto":"Blitzcrank"
      },
      {
        "id":8,
        "url":brand,
        "nome":"brand",
        "texto":"Brand"
      },
      {
        "id":9,
        "url":braum,
        "nome":"braum",
        "texto":"Braum"
      },
      {
        "id":10,
        "url":choGath,
        "nome":"choGath",
        "texto":"Cho'Gath"
      },
      {
        "id":11,
        "url":darius,
        "nome":"darius",
        "texto":"Darius"
      },
      {
        "id":12,
        "url":draven,
        "nome":"draven",
        "texto":"Draven"
      },
      {
        "id":13,
        "url":elise,
        "nome":"elise",
        "texto":"Elise"
      },
      {
        "id":14,
        "url":evelynn,
        "nome":"evelynn",
        "texto":"Evelynn"
      },
      {
        "id":15,
        "url":fiora,
        "nome":"fiora",
        "texto":"Fiora"
      },
      {
        "id":16,
        "url":gangplank,
        "nome":"gangplank",
        "texto":"Gangplank"
      },
      {
        "id":17,
        "url":garen,
        "nome":"garen",
        "texto":"Garen"
      },
      {
        "id":18,
        "url":gnar,
        "nome":"gnar",
        "texto":"Gnar"
      },
      {
        "id":19,
        "url":graves,
        "nome":"graves",
        "texto":"Graves"
      },
      {
        "id":20,
        "url":karthus,
        "nome":"karthus",
        "texto":"Karthus"
      },
      {
        "id":21,
        "url":kassadin,
        "nome":"kassadin",
        "texto":"Kassadin"
      },
      {
        "id":22,
        "url":katarina,
        "nome":"katarina",
        "texto":"Katarina"
      },
      {
        "id":23,
        "url":kayle,
        "nome":"kayle",
        "texto":"Kayle"
      },
      {
        "id":24,
        "url":kennen,
        "nome":"kennen",
        "texto":"Kennen"
      },
      {
        "id":25,
        "url":khaZix,
        "nome":"khaZix",
        "texto":"Kha'Zix"
      },
      {
        "id":26,
        "url":kindred,
        "nome":"kindred",
        "texto":"Kindred"
      },
      {
        "id":27,
        "url":leona,
        "nome":"leona",
        "texto":"Leona"
      },
      {
        "id":28,
        "url":lissandra,
        "nome":"lissandra",
        "texto":"Lissandra"
      },
      {
        "id":29,
        "url":lucian,
        "nome":"lucian",
        "texto":"Lucian"
      },
      {
        "id":30,
        "url":lulu,
        "nome":"lulu",
        "texto":"Lulu"
      },
      {
        "id":31,
        "url":missFortune,
        "nome":"missFortune",
        "texto":"Miss Fortune"
      },
      {
        "id":32,
        "url":mordekaiser,
        "nome":"mordekaiser",
        "texto":"Mordekaiser"
      },
      {
        "id":33,
        "url":morgana,
        "nome":"morgana",
        "texto":"Morgana"
      },
      {
        "id":34,
        "url":nidalee,
        "nome":"nidalee",
        "texto":"Nidalee"
      },
      {
        "id":35,
        "url":poppy,
        "nome":"poppy",
        "texto":"Poppy"
      },
      {
        "id":36,
        "url":pyke,
        "nome":"pyke",
        "texto":"pyke"
      },
      {
        "id":37,
        "url":rekSai,
        "nome":"rekSai",
        "texto":"Rek'Sai"
      },
      {
        "id":38,
        "url":rengar,
        "nome":"rengar",
        "texto":"Rengar"
      },
      {
        "id":39,
        "url":sejuani,
        "nome":"sejuani",
        "texto":"Sejuani"
      },
      {
        "id":40,
        "url":shen,
        "nome":"shen",
        "texto":"Shen"
      },
      {
        "id":41,
        "url":shyvana,
        "nome":"shyvana",
        "texto":"Shyvana"
      },
      {
        "id":42,
        "url":swain,
        "nome":"swain",
        "texto":"Swain"
      },
      {
        "id":43,
        "url":tristana,
        "nome":"tristana",
        "texto":"Tristana"
      },
      {
        "id":44,
        "url":varus,
        "nome":"varus",
        "texto":"Varus"
      },
      {
        "id":45,
        "url":vayne,
        "nome":"vayne",
        "texto":"Vayne"
      },
      {
        "id":46,
        "url":veigar,
        "nome":"veigar",
        "texto":"Veigar"
      },
      {
        "id":47,
        "url":volibear,
        "nome":"volibear",
        "texto":"Volibear"
      },
      {
        "id":48,
        "url":warwick,
        "nome":"warwick",
        "texto":"Warwick"
      },
      {
        "id":49,
        "url":yasuo,
        "nome":"yasuo",
        "texto":"Yasuo"
      },
      {
        "id":50,
        "url":zed,
        "nome":"zed",
        "texto":"Zed"
      },
      
      
    ],
    itens1:[
      {
        "id":1,
        "url":gpc,
        "nome":"gpc",
        "texto":"Espada G .p .C"
      },
      {
        "id":2,
        "url":arcoRecurvo,
        "nome":"arcoRecurvo",
        "texto":"Arco Recurvo"
      },
      {
        "id":3,
        "url":bastaoGrande,
        "nome":"bastaoGrande",
        "texto":"Bastão Grande"
      },
      {
        "id":4,
        "url":lagrima,
        "nome":"lagrima",
        "texto":"Lágrima da Deusa"
      },
      {
        "id":5,
        "url":cotaMalha,
        "nome":"cotaMalha",
        "texto":"Cota de Malha"
      },
      {
        "id":6,
        "url":capaNegatron,
        "nome":"capaNegatron",
        "texto":"Capa Negatron"
      },
      {
        "id":7,
        "url":cintoGigante,
        "nome":"cintoGigante",
        "texto":"Cinto Gigante"
      },
      {
        "id":8,
        "url":espatula,
        "nome":"espatula",
        "texto":"Espátula"
      },
    
  
  
  ]
  }
  
  export const GetItem = (name) => {
    return ItensTier2[name];
  }
  export const GetCampeoes = (nome) => {
    return Campeoes[nome];
  }

  export const GetItemBasico = (nome) => {
    return ItensTier1[nome];
  }