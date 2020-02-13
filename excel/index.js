var array = [
    "status_agv.mah.Factory2.10.5.85.254.A002",
    "status_agv.mah.Factory2.10.5.85.254.D015",
    "status_agv.mah.Factory2.10.5.116.52.A037",
    "status_agv.mah.Factory2.10.5.85.254.A003",
    "status_agv.mah.Factory2.10.5.85.254.D016",
    "status_agv.mah.Factory2.10.5.116.52.A044",
    "status_agv.mah.Factory2.10.5.85.254.A004",
    "status_agv.mah.Factory2.10.5.85.254.D017",
    "status_agv.mah.Factory2.10.5.116.52.A047",
    "status_agv.mah.Factory2.10.5.85.254.A005",
    "status_agv.mah.Factory2.10.5.85.254.D018",
    "status_agv.mah.Factory2.10.5.116.52.A055",
    "status_agv.mah.Factory2.10.5.85.254.A006",
    "status_agv.mah.Factory2.10.5.85.254.D019",
    "status_agv.mah.Factory2.10.5.116.52.A056",
    "status_agv.mah.Factory2.10.5.85.254.A007",
    "status_agv.mah.Factory2.10.5.85.254.D022",
    "status_agv.mah.Factory2.10.5.116.52.A057",
    "status_agv.mah.Factory2.10.5.85.254.A008",
    "status_agv.mah.Factory2.10.5.85.254.D023",
    "status_agv.mah.Factory2.10.5.116.52.A058",
    "status_agv.mah.Factory2.10.5.85.254.A009",
    "status_agv.mah.Factory2.10.5.85.254.D024",
    "status_agv.mah.Factory2.10.5.116.52.A059",
    "status_agv.mah.Factory2.10.5.85.254.A011",
    "status_agv.mah.Factory2.10.5.85.254.D025",
    "status_agv.mah.Factory2.10.5.116.52.A060",
    "status_agv.mah.Factory2.10.5.85.254.A012",
    "status_agv.mah.Factory2.10.5.85.254.D026",
    "status_agv.mah.Factory2.10.5.116.52.A061",
    "status_agv.mah.Factory2.10.5.85.254.A020",
    "status_agv.mah.Factory2.10.5.85.254.D027",
    "status_agv.mah.Factory2.10.5.116.52.A062",
    "status_agv.mah.Factory2.10.5.85.254.A021",
    "status_agv.mah.Factory2.10.5.85.254.D028",
    "status_agv.mah.Factory2.10.5.116.52.A063",
    "status_agv.mah.Factory2.10.5.85.254.A032",
    "status_agv.mah.Factory2.10.5.85.254.D029",
    "status_agv.mah.Factory2.10.5.116.52.A064",
    "status_agv.mah.Factory2.10.5.85.254.A033",
    "status_agv.mah.Factory2.10.5.85.254.D030",
    "status_agv.mah.Factory2.10.5.116.52.A068",
    "status_agv.mah.Factory2.10.5.85.254.A034",
    "status_agv.mah.Factory2.10.5.85.254.D031",
    "status_agv.mah.Factory2.10.5.116.52.A069",
    "status_agv.mah.Factory2.10.5.85.254.D010",
    "status_agv.mah.Factory2.10.5.85.254.D041",
    "status_agv.mah.Factory2.10.5.116.52.A070",
    "status_agv.mah.Factory2.10.5.85.254.D013",
    "status_agv.mah.Factory2.10.5.85.254.A001",
    "status_agv.mah.Factory2.10.5.85.254.D014"
]

array2 = []

for (var i = 0; i < array.length; i++) {
    array2.push(
        {
            ObjectId: array[i],
            Thumbnail: `Car${i + 1}`
        }
    )
}

console.log(array2)