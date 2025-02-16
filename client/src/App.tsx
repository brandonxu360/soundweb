import type React from "react"
import InteractiveGraph from "./InteractiveGraph"
import TitleBox from "./titleBox"

// Your graph data
const graphData = {
  "nodes": [
    {
      "id": 0,
      "track_name": "No Other Name",
      "group": 1
    },
    {
      "id": 2,
      "track_name": "Save the Trees, Pt. 1",
      "group": 3
    },
    {
      "id": 3,
      "track_name": "Merry Christmas",
      "group": 4
    },
    {
      "id": 4,
      "track_name": "月の大きさ",
      "group": 4
    },
    {
      "id": 5,
      "track_name": "Jah Jah Revolta, Pt. 2",
      "group": 4
    },
    {
      "id": 6,
      "track_name": "Please Stop Communicating",
      "group": 3
    },
    {
      "id": 7,
      "track_name": "A Form of Protest",
      "group": 1
    },
    {
      "id": 8,
      "track_name": "I'm Ready - Radio Edit",
      "group": 0
    },
    {
      "id": 9,
      "track_name": "Proibida Pra Mim (Grazon) - Ao Vivo",
      "group": 1
    },
    {
      "id": 10,
      "track_name": "I'll Be Home For Christmas - From The Kacey Musgraves Christmas Show",
      "group": 3
    },
    {
      "id": 11,
      "track_name": "時間がない",
      "group": 4
    },
    {
      "id": 12,
      "track_name": "Sur",
      "group": 3
    },
    {
      "id": 13,
      "track_name": "Pega pega (Participação especial de Jojo Maronttinni) - Ao vivo",
      "group": 3
    },
    {
      "id": 14,
      "track_name": "In Case You Didn’t Know",
      "group": 3
    },
    {
      "id": 15,
      "track_name": "O Sopro do Fole",
      "group": 3
    },
    {
      "id": 16,
      "track_name": "Vi Mamãe Oxum Na Cachoeira - Live",
      "group": 3
    },
    {
      "id": 17,
      "track_name": "Me Gabber - DJ Paul Elstak & The BeatKrusher Remix",
      "group": 1
    },
    {
      "id": 18,
      "track_name": "Into Your Arms (feat. Ava Max)",
      "group": 1
    },
    {
      "id": 19,
      "track_name": "Mocca",
      "group": 4
    },
    {
      "id": 20,
      "track_name": "Nobody Can Save Me",
      "group": 1
    },
    {
      "id": 21,
      "track_name": "all the good girls go to hell",
      "group": 4
    },
    {
      "id": 22,
      "track_name": "Machine Spirit",
      "group": 0
    },
    {
      "id": 23,
      "track_name": "Bear Crawl",
      "group": 4
    },
    {
      "id": 24,
      "track_name": "Time To Jack",
      "group": 0
    },
    {
      "id": 25,
      "track_name": "Ready fi di party",
      "group": 3
    },
    {
      "id": 26,
      "track_name": "Mis Noches Te Recuerdan",
      "group": 3
    },
    {
      "id": 27,
      "track_name": "Sometimes Love",
      "group": 4
    },
    {
      "id": 28,
      "track_name": "Everybody Loves Louis",
      "group": 3
    },
    {
      "id": 29,
      "track_name": "Planet Zero",
      "group": 1
    },
    {
      "id": 30,
      "track_name": "Do You?",
      "group": 2
    },
    {
      "id": 31,
      "track_name": "Paris",
      "group": 1
    },
    {
      "id": 32,
      "track_name": "Wild Life",
      "group": 1
    },
    {
      "id": 33,
      "track_name": "Joda - Worakls Remix",
      "group": 0
    },
    {
      "id": 34,
      "track_name": "O Resgate",
      "group": 3
    },
    {
      "id": 35,
      "track_name": "La Mala",
      "group": 1
    },
    {
      "id": 36,
      "track_name": "Silo (feat. fknsyd)",
      "group": 1
    },
    {
      "id": 37,
      "track_name": "Ferxxo 100",
      "group": 4
    },
    {
      "id": 38,
      "track_name": "Making Music",
      "group": 4
    },
    {
      "id": 39,
      "track_name": "Ruega por Mí (Prega Per Me)",
      "group": 3
    },
    {
      "id": 40,
      "track_name": "Holding",
      "group": 3
    },
    {
      "id": 41,
      "track_name": "The Farthest Star",
      "group": 1
    },
    {
      "id": 42,
      "track_name": "Get It On",
      "group": 0
    },
    {
      "id": 43,
      "track_name": "Para dos",
      "group": 2
    },
    {
      "id": 44,
      "track_name": "Bloco do Carro Chefe",
      "group": 4
    },
    {
      "id": 45,
      "track_name": "Daughters",
      "group": 3
    },
    {
      "id": 46,
      "track_name": "Yo No Soy Celoso",
      "group": 4
    },
    {
      "id": 47,
      "track_name": "Quieren Efectos",
      "group": 0
    },
    {
      "id": 48,
      "track_name": "Boozed - Edit",
      "group": 1
    },
    {
      "id": 49,
      "track_name": "Talking Body - The Young Professionals Remix",
      "group": 4
    }
  ],
  "edges": [
    {
      "source": 0,
      "target": 7,
      "weight": 0.9787639186358309
    },
    {
      "source": 0,
      "target": 17,
      "weight": 0.9755917125364318
    },
    {
      "source": 0,
      "target": 18,
      "weight": 0.9697805589030423
    },
    {
      "source": 0,
      "target": 20,
      "weight": 0.916350688022016
    },
    {
      "source": 0,
      "target": 29,
      "weight": 0.9790681046230117
    },
    {
      "source": 0,
      "target": 31,
      "weight": 0.9608901357416707
    },
    {
      "source": 0,
      "target": 32,
      "weight": 0.99985322247055
    },
    {
      "source": 0,
      "target": 35,
      "weight": 0.9476676898745842
    },
    {
      "source": 0,
      "target": 36,
      "weight": 0.9112349784354077
    },
    {
      "source": 0,
      "target": 41,
      "weight": 0.9704792054736932
    },
    {
      "source": 0,
      "target": 48,
      "weight": 0.9062654223936466
    },
    {
      "source": 2,
      "target": 34,
      "weight": 0.9007760478420473
    },
    {
      "source": 2,
      "target": 40,
      "weight": 0.9314757893413139
    },
    {
      "source": 3,
      "target": 4,
      "weight": 0.954660089406261
    },
    {
      "source": 3,
      "target": 5,
      "weight": 0.9157904555489141
    },
    {
      "source": 3,
      "target": 11,
      "weight": 0.9612836539413436
    },
    {
      "source": 3,
      "target": 12,
      "weight": 0.9210491653815198
    },
    {
      "source": 3,
      "target": 13,
      "weight": 0.9393073056247286
    },
    {
      "source": 3,
      "target": 16,
      "weight": 0.966399745694339
    },
    {
      "source": 3,
      "target": 19,
      "weight": 0.9375624101033817
    },
    {
      "source": 3,
      "target": 20,
      "weight": 0.9096308287491477
    },
    {
      "source": 3,
      "target": 21,
      "weight": 0.9583915636821224
    },
    {
      "source": 3,
      "target": 25,
      "weight": 0.9628487730194972
    },
    {
      "source": 3,
      "target": 26,
      "weight": 0.9838484362928972
    },
    {
      "source": 3,
      "target": 27,
      "weight": 0.9405161174786942
    },
    {
      "source": 3,
      "target": 34,
      "weight": 0.93283480385886
    },
    {
      "source": 3,
      "target": 37,
      "weight": 0.9888917011651714
    },
    {
      "source": 3,
      "target": 38,
      "weight": 0.9564532473545341
    },
    {
      "source": 3,
      "target": 44,
      "weight": 0.9120781289683603
    },
    {
      "source": 3,
      "target": 45,
      "weight": 0.9342629871532154
    },
    {
      "source": 3,
      "target": 46,
      "weight": 0.9776739291725488
    },
    {
      "source": 3,
      "target": 49,
      "weight": 0.9206602911764167
    },
    {
      "source": 4,
      "target": 5,
      "weight": 0.9120092158340416
    },
    {
      "source": 4,
      "target": 9,
      "weight": 0.9303787786726333
    },
    {
      "source": 4,
      "target": 11,
      "weight": 0.9380070247781831
    },
    {
      "source": 4,
      "target": 13,
      "weight": 0.9577868561681577
    },
    {
      "source": 4,
      "target": 16,
      "weight": 0.9682930569358577
    },
    {
      "source": 4,
      "target": 19,
      "weight": 0.9143831004484848
    },
    {
      "source": 4,
      "target": 20,
      "weight": 0.9085935201115133
    },
    {
      "source": 4,
      "target": 26,
      "weight": 0.9632861883496201
    },
    {
      "source": 4,
      "target": 27,
      "weight": 0.9620205865945843
    },
    {
      "source": 4,
      "target": 34,
      "weight": 0.9434920786624496
    },
    {
      "source": 4,
      "target": 37,
      "weight": 0.9506062839874844
    },
    {
      "source": 4,
      "target": 40,
      "weight": 0.9025524581552293
    },
    {
      "source": 4,
      "target": 46,
      "weight": 0.9318205544951064
    },
    {
      "source": 5,
      "target": 8,
      "weight": 0.9170192595915856
    },
    {
      "source": 5,
      "target": 9,
      "weight": 0.9192956911843378
    },
    {
      "source": 5,
      "target": 11,
      "weight": 0.9864969223464269
    },
    {
      "source": 5,
      "target": 17,
      "weight": 0.9510453366177688
    },
    {
      "source": 5,
      "target": 18,
      "weight": 0.9357943590071547
    },
    {
      "source": 5,
      "target": 19,
      "weight": 0.9554527732250202
    },
    {
      "source": 5,
      "target": 20,
      "weight": 0.9968623860167601
    },
    {
      "source": 5,
      "target": 21,
      "weight": 0.9120861549351463
    },
    {
      "source": 5,
      "target": 27,
      "weight": 0.9667760289493713
    },
    {
      "source": 5,
      "target": 29,
      "weight": 0.9004645761553518
    },
    {
      "source": 5,
      "target": 31,
      "weight": 0.9671206828413396
    },
    {
      "source": 5,
      "target": 35,
      "weight": 0.9825411465767292
    },
    {
      "source": 5,
      "target": 36,
      "weight": 0.9050147886429262
    },
    {
      "source": 5,
      "target": 37,
      "weight": 0.9623172831686102
    },
    {
      "source": 5,
      "target": 41,
      "weight": 0.9597389191917751
    },
    {
      "source": 5,
      "target": 44,
      "weight": 0.9223525456218546
    },
    {
      "source": 5,
      "target": 46,
      "weight": 0.938220982035615
    },
    {
      "source": 5,
      "target": 49,
      "weight": 0.99612386281607
    },
    {
      "source": 6,
      "target": 34,
      "weight": 0.9344050936174374
    },
    {
      "source": 7,
      "target": 17,
      "weight": 0.987300587430669
    },
    {
      "source": 7,
      "target": 18,
      "weight": 0.9797216506055237
    },
    {
      "source": 7,
      "target": 20,
      "weight": 0.9134355277911999
    },
    {
      "source": 7,
      "target": 29,
      "weight": 0.9998339719901128
    },
    {
      "source": 7,
      "target": 31,
      "weight": 0.9274715142736574
    },
    {
      "source": 7,
      "target": 32,
      "weight": 0.9763911502741607
    },
    {
      "source": 7,
      "target": 35,
      "weight": 0.9521503411664548
    },
    {
      "source": 7,
      "target": 36,
      "weight": 0.942098650086353
    },
    {
      "source": 7,
      "target": 41,
      "weight": 0.9821850631428193
    },
    {
      "source": 7,
      "target": 48,
      "weight": 0.934510630316785
    },
    {
      "source": 8,
      "target": 11,
      "weight": 0.9198765988789495
    },
    {
      "source": 8,
      "target": 21,
      "weight": 0.9368674420290227
    },
    {
      "source": 8,
      "target": 22,
      "weight": 0.9410958854759163
    },
    {
      "source": 8,
      "target": 24,
      "weight": 0.9726823620471398
    },
    {
      "source": 8,
      "target": 27,
      "weight": 0.9055864416941164
    },
    {
      "source": 8,
      "target": 37,
      "weight": 0.9089572494651932
    },
    {
      "source": 8,
      "target": 42,
      "weight": 0.9845141372197337
    },
    {
      "source": 8,
      "target": 46,
      "weight": 0.910619807185144
    },
    {
      "source": 8,
      "target": 47,
      "weight": 0.9523368755845654
    },
    {
      "source": 9,
      "target": 11,
      "weight": 0.907694186670008
    },
    {
      "source": 9,
      "target": 17,
      "weight": 0.9055643510161979
    },
    {
      "source": 9,
      "target": 20,
      "weight": 0.9110638562559791
    },
    {
      "source": 9,
      "target": 27,
      "weight": 0.9596830149317405
    },
    {
      "source": 9,
      "target": 35,
      "weight": 0.9075625729669803
    },
    {
      "source": 9,
      "target": 41,
      "weight": 0.9214557094741029
    },
    {
      "source": 10,
      "target": 12,
      "weight": 0.9657439888697142
    },
    {
      "source": 10,
      "target": 13,
      "weight": 0.9034746698425202
    },
    {
      "source": 10,
      "target": 14,
      "weight": 0.986385971422543
    },
    {
      "source": 10,
      "target": 15,
      "weight": 0.9887093029461022
    },
    {
      "source": 10,
      "target": 28,
      "weight": 0.9953548195109001
    },
    {
      "source": 10,
      "target": 39,
      "weight": 0.9819444330474776
    },
    {
      "source": 10,
      "target": 40,
      "weight": 0.9076999670666606
    },
    {
      "source": 10,
      "target": 45,
      "weight": 0.9753386486633806
    },
    {
      "source": 11,
      "target": 17,
      "weight": 0.9071145697789772
    },
    {
      "source": 11,
      "target": 19,
      "weight": 0.9647337772189731
    },
    {
      "source": 11,
      "target": 20,
      "weight": 0.9802620639427557
    },
    {
      "source": 11,
      "target": 21,
      "weight": 0.9417700288846359
    },
    {
      "source": 11,
      "target": 23,
      "weight": 0.9076842122728892
    },
    {
      "source": 11,
      "target": 25,
      "weight": 0.907666869558377
    },
    {
      "source": 11,
      "target": 26,
      "weight": 0.9234051336948895
    },
    {
      "source": 11,
      "target": 27,
      "weight": 0.9833497543369728
    },
    {
      "source": 11,
      "target": 31,
      "weight": 0.9334454513170971
    },
    {
      "source": 11,
      "target": 35,
      "weight": 0.9529572910254307
    },
    {
      "source": 11,
      "target": 37,
      "weight": 0.9892722305092873
    },
    {
      "source": 11,
      "target": 38,
      "weight": 0.9232990882780503
    },
    {
      "source": 11,
      "target": 41,
      "weight": 0.9188793568250958
    },
    {
      "source": 11,
      "target": 44,
      "weight": 0.944234276473656
    },
    {
      "source": 11,
      "target": 46,
      "weight": 0.9815169840341117
    },
    {
      "source": 11,
      "target": 49,
      "weight": 0.9884446685052329
    },
    {
      "source": 12,
      "target": 13,
      "weight": 0.9832482215064962
    },
    {
      "source": 12,
      "target": 14,
      "weight": 0.9639660570491474
    },
    {
      "source": 12,
      "target": 15,
      "weight": 0.9315031722829965
    },
    {
      "source": 12,
      "target": 16,
      "weight": 0.9768168317951289
    },
    {
      "source": 12,
      "target": 25,
      "weight": 0.9029738201243195
    },
    {
      "source": 12,
      "target": 26,
      "weight": 0.9526272341548656
    },
    {
      "source": 12,
      "target": 28,
      "weight": 0.9467804595365473
    },
    {
      "source": 12,
      "target": 34,
      "weight": 0.9364994447702621
    },
    {
      "source": 12,
      "target": 39,
      "weight": 0.9874998502101094
    },
    {
      "source": 12,
      "target": 40,
      "weight": 0.9620292047782039
    },
    {
      "source": 12,
      "target": 45,
      "weight": 0.9859024655498498
    },
    {
      "source": 13,
      "target": 14,
      "weight": 0.9136612086157909
    },
    {
      "source": 13,
      "target": 16,
      "weight": 0.9931349260171303
    },
    {
      "source": 13,
      "target": 25,
      "weight": 0.9107481851144906
    },
    {
      "source": 13,
      "target": 26,
      "weight": 0.9683298113195735
    },
    {
      "source": 13,
      "target": 34,
      "weight": 0.9664931628032499
    },
    {
      "source": 13,
      "target": 39,
      "weight": 0.9552459674384922
    },
    {
      "source": 13,
      "target": 40,
      "weight": 0.9702859238352256
    },
    {
      "source": 13,
      "target": 45,
      "weight": 0.9551307031327039
    },
    {
      "source": 14,
      "target": 15,
      "weight": 0.9812948754684632
    },
    {
      "source": 14,
      "target": 16,
      "weight": 0.906966610972422
    },
    {
      "source": 14,
      "target": 25,
      "weight": 0.9107069739486204
    },
    {
      "source": 14,
      "target": 28,
      "weight": 0.9889220314348423
    },
    {
      "source": 14,
      "target": 39,
      "weight": 0.9874005478625799
    },
    {
      "source": 14,
      "target": 40,
      "weight": 0.9346043192949439
    },
    {
      "source": 14,
      "target": 45,
      "weight": 0.9903226550121383
    },
    {
      "source": 15,
      "target": 28,
      "weight": 0.9898908913280849
    },
    {
      "source": 15,
      "target": 39,
      "weight": 0.955194657567852
    },
    {
      "source": 15,
      "target": 45,
      "weight": 0.9602751202886449
    },
    {
      "source": 16,
      "target": 25,
      "weight": 0.9191216929821449
    },
    {
      "source": 16,
      "target": 26,
      "weight": 0.9902040256791949
    },
    {
      "source": 16,
      "target": 34,
      "weight": 0.9518621056361682
    },
    {
      "source": 16,
      "target": 37,
      "weight": 0.9294513603929418
    },
    {
      "source": 16,
      "target": 39,
      "weight": 0.9400573226938351
    },
    {
      "source": 16,
      "target": 40,
      "weight": 0.9442566623167243
    },
    {
      "source": 16,
      "target": 45,
      "weight": 0.9556054355507977
    },
    {
      "source": 16,
      "target": 46,
      "weight": 0.9195955016607452
    },
    {
      "source": 17,
      "target": 18,
      "weight": 0.9934350256703397
    },
    {
      "source": 17,
      "target": 19,
      "weight": 0.9145396779071694
    },
    {
      "source": 17,
      "target": 20,
      "weight": 0.9644701391768034
    },
    {
      "source": 17,
      "target": 29,
      "weight": 0.9889820240992929
    },
    {
      "source": 17,
      "target": 31,
      "weight": 0.9680298163752904
    },
    {
      "source": 17,
      "target": 32,
      "weight": 0.973471581324845
    },
    {
      "source": 17,
      "target": 35,
      "weight": 0.9881643952869448
    },
    {
      "source": 17,
      "target": 36,
      "weight": 0.9451139058274161
    },
    {
      "source": 17,
      "target": 41,
      "weight": 0.9967897101532796
    },
    {
      "source": 17,
      "target": 48,
      "weight": 0.9330085413310609
    },
    {
      "source": 17,
      "target": 49,
      "weight": 0.9383444741256218
    },
    {
      "source": 18,
      "target": 19,
      "weight": 0.9249403747553583
    },
    {
      "source": 18,
      "target": 20,
      "weight": 0.9502343413611102
    },
    {
      "source": 18,
      "target": 29,
      "weight": 0.980425093610231
    },
    {
      "source": 18,
      "target": 31,
      "weight": 0.9616074497734566
    },
    {
      "source": 18,
      "target": 32,
      "weight": 0.9681067430737745
    },
    {
      "source": 18,
      "target": 35,
      "weight": 0.9841501575524231
    },
    {
      "source": 18,
      "target": 36,
      "weight": 0.9419306726062129
    },
    {
      "source": 18,
      "target": 41,
      "weight": 0.9813805385128572
    },
    {
      "source": 18,
      "target": 48,
      "weight": 0.920349111930515
    },
    {
      "source": 18,
      "target": 49,
      "weight": 0.9259350737396281
    },
    {
      "source": 19,
      "target": 20,
      "weight": 0.953411757376471
    },
    {
      "source": 19,
      "target": 21,
      "weight": 0.9508228539878252
    },
    {
      "source": 19,
      "target": 23,
      "weight": 0.9642734547767072
    },
    {
      "source": 19,
      "target": 25,
      "weight": 0.9457199255728886
    },
    {
      "source": 19,
      "target": 27,
      "weight": 0.9481052974295762
    },
    {
      "source": 19,
      "target": 31,
      "weight": 0.9223805732729616
    },
    {
      "source": 19,
      "target": 34,
      "weight": 0.910128237458465
    },
    {
      "source": 19,
      "target": 35,
      "weight": 0.9557132082737857
    },
    {
      "source": 19,
      "target": 37,
      "weight": 0.970336302400712
    },
    {
      "source": 19,
      "target": 38,
      "weight": 0.9229814248181171
    },
    {
      "source": 19,
      "target": 41,
      "weight": 0.9054649032073091
    },
    {
      "source": 19,
      "target": 44,
      "weight": 0.9827702497016593
    },
    {
      "source": 19,
      "target": 46,
      "weight": 0.9428451510014445
    },
    {
      "source": 19,
      "target": 49,
      "weight": 0.9592595108971456
    },
    {
      "source": 20,
      "target": 27,
      "weight": 0.9571761273165589
    },
    {
      "source": 20,
      "target": 29,
      "weight": 0.918555562773244
    },
    {
      "source": 20,
      "target": 31,
      "weight": 0.9799687118838141
    },
    {
      "source": 20,
      "target": 32,
      "weight": 0.9146514197029998
    },
    {
      "source": 20,
      "target": 35,
      "weight": 0.9901567534204002
    },
    {
      "source": 20,
      "target": 37,
      "weight": 0.9578841912943182
    },
    {
      "source": 20,
      "target": 41,
      "weight": 0.9715532747186831
    },
    {
      "source": 20,
      "target": 44,
      "weight": 0.913376283902242
    },
    {
      "source": 20,
      "target": 46,
      "weight": 0.9246221728820717
    },
    {
      "source": 20,
      "target": 49,
      "weight": 0.99582105954085
    },
    {
      "source": 21,
      "target": 23,
      "weight": 0.9278987742921531
    },
    {
      "source": 21,
      "target": 25,
      "weight": 0.9588114437366125
    },
    {
      "source": 21,
      "target": 26,
      "weight": 0.9185036046487175
    },
    {
      "source": 21,
      "target": 37,
      "weight": 0.9650268196599995
    },
    {
      "source": 21,
      "target": 38,
      "weight": 0.9710198822876426
    },
    {
      "source": 21,
      "target": 44,
      "weight": 0.9528602280381459
    },
    {
      "source": 21,
      "target": 46,
      "weight": 0.9517236222448272
    },
    {
      "source": 21,
      "target": 49,
      "weight": 0.9168080569950493
    },
    {
      "source": 22,
      "target": 24,
      "weight": 0.9869553992446181
    },
    {
      "source": 22,
      "target": 33,
      "weight": 0.9438960603784446
    },
    {
      "source": 22,
      "target": 36,
      "weight": 0.9529667393695176
    },
    {
      "source": 22,
      "target": 42,
      "weight": 0.968477984323636
    },
    {
      "source": 22,
      "target": 47,
      "weight": 0.9805646575530481
    },
    {
      "source": 22,
      "target": 48,
      "weight": 0.9645091762141291
    },
    {
      "source": 23,
      "target": 27,
      "weight": 0.9099320957389042
    },
    {
      "source": 23,
      "target": 37,
      "weight": 0.9195954973427715
    },
    {
      "source": 23,
      "target": 44,
      "weight": 0.9828371241909561
    },
    {
      "source": 23,
      "target": 46,
      "weight": 0.9259655728430911
    },
    {
      "source": 24,
      "target": 33,
      "weight": 0.9348741408725204
    },
    {
      "source": 24,
      "target": 36,
      "weight": 0.9106247635595501
    },
    {
      "source": 24,
      "target": 42,
      "weight": 0.9867797567516398
    },
    {
      "source": 24,
      "target": 47,
      "weight": 0.9845413481188705
    },
    {
      "source": 24,
      "target": 48,
      "weight": 0.9194901268461079
    },
    {
      "source": 25,
      "target": 26,
      "weight": 0.9247087331762881
    },
    {
      "source": 25,
      "target": 34,
      "weight": 0.9610765530667151
    },
    {
      "source": 25,
      "target": 37,
      "weight": 0.955749198317332
    },
    {
      "source": 25,
      "target": 38,
      "weight": 0.9713267659111872
    },
    {
      "source": 25,
      "target": 40,
      "weight": 0.9120710503954493
    },
    {
      "source": 25,
      "target": 44,
      "weight": 0.9173835083593235
    },
    {
      "source": 25,
      "target": 45,
      "weight": 0.9349325232639585
    },
    {
      "source": 25,
      "target": 46,
      "weight": 0.9104563887026275
    },
    {
      "source": 26,
      "target": 27,
      "weight": 0.9294752262026882
    },
    {
      "source": 26,
      "target": 34,
      "weight": 0.9270283544632997
    },
    {
      "source": 26,
      "target": 37,
      "weight": 0.9562764314632298
    },
    {
      "source": 26,
      "target": 39,
      "weight": 0.9053477844110333
    },
    {
      "source": 26,
      "target": 45,
      "weight": 0.9404162100067772
    },
    {
      "source": 26,
      "target": 46,
      "weight": 0.9617784511451051
    },
    {
      "source": 27,
      "target": 35,
      "weight": 0.9350810226679681
    },
    {
      "source": 27,
      "target": 37,
      "weight": 0.9661704323670124
    },
    {
      "source": 27,
      "target": 41,
      "weight": 0.9126437731371009
    },
    {
      "source": 27,
      "target": 44,
      "weight": 0.9202297527180829
    },
    {
      "source": 27,
      "target": 46,
      "weight": 0.9705045361489828
    },
    {
      "source": 27,
      "target": 49,
      "weight": 0.9592913304690914
    },
    {
      "source": 28,
      "target": 39,
      "weight": 0.9776160784435914
    },
    {
      "source": 28,
      "target": 40,
      "weight": 0.904983100815487
    },
    {
      "source": 28,
      "target": 45,
      "weight": 0.9666758636983697
    },
    {
      "source": 29,
      "target": 31,
      "weight": 0.9309999528697346
    },
    {
      "source": 29,
      "target": 32,
      "weight": 0.9765388507328299
    },
    {
      "source": 29,
      "target": 35,
      "weight": 0.9553703235490405
    },
    {
      "source": 29,
      "target": 36,
      "weight": 0.939541249972081
    },
    {
      "source": 29,
      "target": 41,
      "weight": 0.9847050876806975
    },
    {
      "source": 29,
      "target": 48,
      "weight": 0.9320325237131765
    },
    {
      "source": 30,
      "target": 43,
      "weight": 0.9301745376379505
    },
    {
      "source": 31,
      "target": 32,
      "weight": 0.9611670745223405
    },
    {
      "source": 31,
      "target": 35,
      "weight": 0.9820235212933429
    },
    {
      "source": 31,
      "target": 37,
      "weight": 0.9188038035958467
    },
    {
      "source": 31,
      "target": 41,
      "weight": 0.9684003145040251
    },
    {
      "source": 31,
      "target": 49,
      "weight": 0.9698347603021219
    },
    {
      "source": 32,
      "target": 35,
      "weight": 0.9458854099081925
    },
    {
      "source": 32,
      "target": 36,
      "weight": 0.9122816595846648
    },
    {
      "source": 32,
      "target": 41,
      "weight": 0.9681443994072573
    },
    {
      "source": 32,
      "target": 48,
      "weight": 0.9076755232841787
    },
    {
      "source": 33,
      "target": 47,
      "weight": 0.9270512784488795
    },
    {
      "source": 34,
      "target": 37,
      "weight": 0.9155950628634303
    },
    {
      "source": 34,
      "target": 39,
      "weight": 0.9237881768075883
    },
    {
      "source": 34,
      "target": 40,
      "weight": 0.9732150282870732
    },
    {
      "source": 34,
      "target": 45,
      "weight": 0.9280560307474531
    },
    {
      "source": 35,
      "target": 36,
      "weight": 0.9286708315016194
    },
    {
      "source": 35,
      "target": 37,
      "weight": 0.9322567239873185
    },
    {
      "source": 35,
      "target": 41,
      "weight": 0.9862095096425751
    },
    {
      "source": 35,
      "target": 44,
      "weight": 0.9047335144562973
    },
    {
      "source": 35,
      "target": 48,
      "weight": 0.9120656458695744
    },
    {
      "source": 35,
      "target": 49,
      "weight": 0.9777618952783701
    },
    {
      "source": 36,
      "target": 41,
      "weight": 0.939716678984193
    },
    {
      "source": 36,
      "target": 47,
      "weight": 0.9025334694778788
    },
    {
      "source": 36,
      "target": 48,
      "weight": 0.9952484843888796
    },
    {
      "source": 37,
      "target": 38,
      "weight": 0.9575759140773777
    },
    {
      "source": 37,
      "target": 44,
      "weight": 0.9471554551446978
    },
    {
      "source": 37,
      "target": 46,
      "weight": 0.9844743908748743
    },
    {
      "source": 37,
      "target": 49,
      "weight": 0.9671522951718414
    },
    {
      "source": 38,
      "target": 44,
      "weight": 0.9187671622833778
    },
    {
      "source": 38,
      "target": 46,
      "weight": 0.9279038364157544
    },
    {
      "source": 38,
      "target": 49,
      "weight": 0.9089133047492783
    },
    {
      "source": 39,
      "target": 40,
      "weight": 0.9694649392969714
    },
    {
      "source": 39,
      "target": 45,
      "weight": 0.9893643931325736
    },
    {
      "source": 40,
      "target": 45,
      "weight": 0.9508796210874462
    },
    {
      "source": 41,
      "target": 48,
      "weight": 0.9339791641859145
    },
    {
      "source": 41,
      "target": 49,
      "weight": 0.9460333000968125
    },
    {
      "source": 42,
      "target": 47,
      "weight": 0.9865090476309365
    },
    {
      "source": 42,
      "target": 48,
      "weight": 0.9070955354146473
    },
    {
      "source": 44,
      "target": 46,
      "weight": 0.9419369463579351
    },
    {
      "source": 44,
      "target": 49,
      "weight": 0.9350150163100469
    },
    {
      "source": 46,
      "target": 49,
      "weight": 0.9444975621500826
    },
    {
      "source": 47,
      "target": 48,
      "weight": 0.9162064067166373
    }
  ]
}

const App: React.FC = () => {
  return (
    <div>
      <h1>Interactive Track Graph</h1>
      <TitleBox text="hi" color="rgb(0, 0, 255)" imageUrl="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"/>
    </div>
  )
}

export default App


