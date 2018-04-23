export default [
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "bakerloo",
    "name": "Bakerloo",
    "modeName": "tube",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.943Z",
    "modified": "2018-03-14T17:44:30.943Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=Bakerloo&serviceTypes=Regular"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "central",
    "name": "Central",
    "modeName": "tube",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.947Z",
    "modified": "2018-03-14T17:44:30.947Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "lineId": "central",
        "statusSeverity": 9,
        "statusSeverityDescription": "Minor Delays",
        "reason": "Central Line: Minor delays between White City and Leytonstone, eastbound only, due to an earlier signal failure at White City. GOOD SERVICE on the rest of the line. ",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": [
          {
            "$type": "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            "fromDate": "2018-04-11T17:49:27Z",
            "toDate": "2018-04-12T01:29:00Z",
            "isNow": true
          }
        ],
        "disruption": {
          "$type": "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          "category": "RealTime",
          "categoryDescription": "RealTime",
          "description": "Central Line: Minor delays between White City and Leytonstone, eastbound only, due to an earlier signal failure at White City. GOOD SERVICE on the rest of the line. ",
          "affectedRoutes": [
            {
              "$type": "Tfl.Api.Presentation.Entities.RouteSection, Tfl.Api.Presentation.Entities",
              "id": "2061",
              "name": "West Ruislip Underground Station - Epping Underground Station",
              "direction": "outbound",
              "originationName": "West Ruislip Underground Station",
              "destinationName": "Epping Underground Station",
              "routeSectionNaptanEntrySequence": [
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 9,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUWCY",
                    "modes": [],
                    "icsCode": "1000269",
                    "stationNaptan": "940GZZLUWCY",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUWCY",
                    "commonName": "White City Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 10,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSBC",
                    "modes": [],
                    "icsCode": "1000203",
                    "stationNaptan": "940GZZLUSBC",
                    "hubNaptanCode": "HUBSPB",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSBC",
                    "commonName": "Shepherd's Bush (Central) Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 11,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUHPK",
                    "modes": [],
                    "icsCode": "1000113",
                    "stationNaptan": "940GZZLUHPK",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUHPK",
                    "commonName": "Holland Park Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 12,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUNHG",
                    "modes": [],
                    "icsCode": "1000167",
                    "stationNaptan": "940GZZLUNHG",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUNHG",
                    "commonName": "Notting Hill Gate Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 13,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUQWY",
                    "modes": [],
                    "icsCode": "1000187",
                    "stationNaptan": "940GZZLUQWY",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUQWY",
                    "commonName": "Queensway Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 14,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULGT",
                    "modes": [],
                    "icsCode": "1000133",
                    "stationNaptan": "940GZZLULGT",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULGT",
                    "commonName": "Lancaster Gate Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 15,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUMBA",
                    "modes": [],
                    "icsCode": "1000144",
                    "stationNaptan": "940GZZLUMBA",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUMBA",
                    "commonName": "Marble Arch Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 16,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBND",
                    "modes": [],
                    "icsCode": "1000025",
                    "stationNaptan": "940GZZLUBND",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBND",
                    "commonName": "Bond Street Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 17,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUOXC",
                    "modes": [],
                    "icsCode": "1000173",
                    "stationNaptan": "940GZZLUOXC",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUOXC",
                    "commonName": "Oxford Circus Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 18,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUTCR",
                    "modes": [],
                    "icsCode": "1000235",
                    "stationNaptan": "940GZZLUTCR",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUTCR",
                    "commonName": "Tottenham Court Road Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 19,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUHBN",
                    "modes": [],
                    "icsCode": "1000112",
                    "stationNaptan": "940GZZLUHBN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUHBN",
                    "commonName": "Holborn Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 20,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUCHL",
                    "modes": [],
                    "icsCode": "1000044",
                    "stationNaptan": "940GZZLUCHL",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUCHL",
                    "commonName": "Chancery Lane Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 21,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSPU",
                    "modes": [],
                    "icsCode": "1000225",
                    "stationNaptan": "940GZZLUSPU",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSPU",
                    "commonName": "St. Paul's Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 22,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBNK",
                    "modes": [],
                    "icsCode": "1000013",
                    "stationNaptan": "940GZZLUBNK",
                    "hubNaptanCode": "HUBBAN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBNK",
                    "commonName": "Bank Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 23,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULVT",
                    "modes": [],
                    "icsCode": "1000138",
                    "stationNaptan": "940GZZLULVT",
                    "hubNaptanCode": "HUBLST",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULVT",
                    "commonName": "Liverpool Street Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 24,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBLG",
                    "modes": [],
                    "icsCode": "1000022",
                    "stationNaptan": "940GZZLUBLG",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBLG",
                    "commonName": "Bethnal Green Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 25,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUMED",
                    "modes": [],
                    "icsCode": "1000146",
                    "stationNaptan": "940GZZLUMED",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUMED",
                    "commonName": "Mile End Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 26,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSTD",
                    "modes": [],
                    "icsCode": "1000226",
                    "stationNaptan": "940GZZLUSTD",
                    "hubNaptanCode": "HUBSRA",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSTD",
                    "commonName": "Stratford Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 27,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULYN",
                    "modes": [],
                    "icsCode": "1000136",
                    "stationNaptan": "940GZZLULYN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULYN",
                    "commonName": "Leyton Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 28,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULYS",
                    "modes": [],
                    "icsCode": "1000137",
                    "stationNaptan": "940GZZLULYS",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULYS",
                    "commonName": "Leytonstone Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                }
              ]
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.RouteSection, Tfl.Api.Presentation.Entities",
              "id": "2067",
              "name": "West Ruislip Underground Station - Hainault Underground Station",
              "direction": "outbound",
              "originationName": "West Ruislip Underground Station",
              "destinationName": "Hainault Underground Station",
              "routeSectionNaptanEntrySequence": [
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 9,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUWCY",
                    "modes": [],
                    "icsCode": "1000269",
                    "stationNaptan": "940GZZLUWCY",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUWCY",
                    "commonName": "White City Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 10,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSBC",
                    "modes": [],
                    "icsCode": "1000203",
                    "stationNaptan": "940GZZLUSBC",
                    "hubNaptanCode": "HUBSPB",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSBC",
                    "commonName": "Shepherd's Bush (Central) Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 11,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUHPK",
                    "modes": [],
                    "icsCode": "1000113",
                    "stationNaptan": "940GZZLUHPK",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUHPK",
                    "commonName": "Holland Park Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 12,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUNHG",
                    "modes": [],
                    "icsCode": "1000167",
                    "stationNaptan": "940GZZLUNHG",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUNHG",
                    "commonName": "Notting Hill Gate Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 13,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUQWY",
                    "modes": [],
                    "icsCode": "1000187",
                    "stationNaptan": "940GZZLUQWY",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUQWY",
                    "commonName": "Queensway Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 14,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULGT",
                    "modes": [],
                    "icsCode": "1000133",
                    "stationNaptan": "940GZZLULGT",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULGT",
                    "commonName": "Lancaster Gate Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 15,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUMBA",
                    "modes": [],
                    "icsCode": "1000144",
                    "stationNaptan": "940GZZLUMBA",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUMBA",
                    "commonName": "Marble Arch Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 16,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBND",
                    "modes": [],
                    "icsCode": "1000025",
                    "stationNaptan": "940GZZLUBND",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBND",
                    "commonName": "Bond Street Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 17,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUOXC",
                    "modes": [],
                    "icsCode": "1000173",
                    "stationNaptan": "940GZZLUOXC",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUOXC",
                    "commonName": "Oxford Circus Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 18,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUTCR",
                    "modes": [],
                    "icsCode": "1000235",
                    "stationNaptan": "940GZZLUTCR",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUTCR",
                    "commonName": "Tottenham Court Road Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 19,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUHBN",
                    "modes": [],
                    "icsCode": "1000112",
                    "stationNaptan": "940GZZLUHBN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUHBN",
                    "commonName": "Holborn Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 20,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUCHL",
                    "modes": [],
                    "icsCode": "1000044",
                    "stationNaptan": "940GZZLUCHL",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUCHL",
                    "commonName": "Chancery Lane Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 21,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSPU",
                    "modes": [],
                    "icsCode": "1000225",
                    "stationNaptan": "940GZZLUSPU",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSPU",
                    "commonName": "St. Paul's Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 22,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBNK",
                    "modes": [],
                    "icsCode": "1000013",
                    "stationNaptan": "940GZZLUBNK",
                    "hubNaptanCode": "HUBBAN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBNK",
                    "commonName": "Bank Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 23,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULVT",
                    "modes": [],
                    "icsCode": "1000138",
                    "stationNaptan": "940GZZLULVT",
                    "hubNaptanCode": "HUBLST",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULVT",
                    "commonName": "Liverpool Street Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 24,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBLG",
                    "modes": [],
                    "icsCode": "1000022",
                    "stationNaptan": "940GZZLUBLG",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBLG",
                    "commonName": "Bethnal Green Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 25,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUMED",
                    "modes": [],
                    "icsCode": "1000146",
                    "stationNaptan": "940GZZLUMED",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUMED",
                    "commonName": "Mile End Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 26,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSTD",
                    "modes": [],
                    "icsCode": "1000226",
                    "stationNaptan": "940GZZLUSTD",
                    "hubNaptanCode": "HUBSRA",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSTD",
                    "commonName": "Stratford Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 27,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULYN",
                    "modes": [],
                    "icsCode": "1000136",
                    "stationNaptan": "940GZZLULYN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULYN",
                    "commonName": "Leyton Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 28,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULYS",
                    "modes": [],
                    "icsCode": "1000137",
                    "stationNaptan": "940GZZLULYS",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULYS",
                    "commonName": "Leytonstone Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                }
              ]
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.RouteSection, Tfl.Api.Presentation.Entities",
              "id": "2069",
              "name": "West Ruislip Underground Station - Hainault Underground Station",
              "direction": "outbound",
              "originationName": "West Ruislip Underground Station",
              "destinationName": "Hainault Underground Station",
              "routeSectionNaptanEntrySequence": [
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 9,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUWCY",
                    "modes": [],
                    "icsCode": "1000269",
                    "stationNaptan": "940GZZLUWCY",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUWCY",
                    "commonName": "White City Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 10,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSBC",
                    "modes": [],
                    "icsCode": "1000203",
                    "stationNaptan": "940GZZLUSBC",
                    "hubNaptanCode": "HUBSPB",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSBC",
                    "commonName": "Shepherd's Bush (Central) Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 11,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUHPK",
                    "modes": [],
                    "icsCode": "1000113",
                    "stationNaptan": "940GZZLUHPK",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUHPK",
                    "commonName": "Holland Park Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 12,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUNHG",
                    "modes": [],
                    "icsCode": "1000167",
                    "stationNaptan": "940GZZLUNHG",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUNHG",
                    "commonName": "Notting Hill Gate Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 13,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUQWY",
                    "modes": [],
                    "icsCode": "1000187",
                    "stationNaptan": "940GZZLUQWY",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUQWY",
                    "commonName": "Queensway Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 14,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULGT",
                    "modes": [],
                    "icsCode": "1000133",
                    "stationNaptan": "940GZZLULGT",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULGT",
                    "commonName": "Lancaster Gate Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 15,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUMBA",
                    "modes": [],
                    "icsCode": "1000144",
                    "stationNaptan": "940GZZLUMBA",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUMBA",
                    "commonName": "Marble Arch Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 16,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBND",
                    "modes": [],
                    "icsCode": "1000025",
                    "stationNaptan": "940GZZLUBND",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBND",
                    "commonName": "Bond Street Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 17,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUOXC",
                    "modes": [],
                    "icsCode": "1000173",
                    "stationNaptan": "940GZZLUOXC",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUOXC",
                    "commonName": "Oxford Circus Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 18,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUTCR",
                    "modes": [],
                    "icsCode": "1000235",
                    "stationNaptan": "940GZZLUTCR",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUTCR",
                    "commonName": "Tottenham Court Road Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 19,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUHBN",
                    "modes": [],
                    "icsCode": "1000112",
                    "stationNaptan": "940GZZLUHBN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUHBN",
                    "commonName": "Holborn Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 20,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUCHL",
                    "modes": [],
                    "icsCode": "1000044",
                    "stationNaptan": "940GZZLUCHL",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUCHL",
                    "commonName": "Chancery Lane Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 21,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSPU",
                    "modes": [],
                    "icsCode": "1000225",
                    "stationNaptan": "940GZZLUSPU",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSPU",
                    "commonName": "St. Paul's Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 22,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBNK",
                    "modes": [],
                    "icsCode": "1000013",
                    "stationNaptan": "940GZZLUBNK",
                    "hubNaptanCode": "HUBBAN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBNK",
                    "commonName": "Bank Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 23,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULVT",
                    "modes": [],
                    "icsCode": "1000138",
                    "stationNaptan": "940GZZLULVT",
                    "hubNaptanCode": "HUBLST",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULVT",
                    "commonName": "Liverpool Street Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 24,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBLG",
                    "modes": [],
                    "icsCode": "1000022",
                    "stationNaptan": "940GZZLUBLG",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBLG",
                    "commonName": "Bethnal Green Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 25,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUMED",
                    "modes": [],
                    "icsCode": "1000146",
                    "stationNaptan": "940GZZLUMED",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUMED",
                    "commonName": "Mile End Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 26,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSTD",
                    "modes": [],
                    "icsCode": "1000226",
                    "stationNaptan": "940GZZLUSTD",
                    "hubNaptanCode": "HUBSRA",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSTD",
                    "commonName": "Stratford Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 27,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULYN",
                    "modes": [],
                    "icsCode": "1000136",
                    "stationNaptan": "940GZZLULYN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULYN",
                    "commonName": "Leyton Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 28,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULYS",
                    "modes": [],
                    "icsCode": "1000137",
                    "stationNaptan": "940GZZLULYS",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULYS",
                    "commonName": "Leytonstone Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                }
              ]
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.RouteSection, Tfl.Api.Presentation.Entities",
              "id": "2072",
              "name": "Ealing Broadway Underground Station - Epping Underground Station",
              "direction": "outbound",
              "originationName": "Ealing Broadway Underground Station",
              "destinationName": "Epping Underground Station",
              "routeSectionNaptanEntrySequence": [
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 4,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUWCY",
                    "modes": [],
                    "icsCode": "1000269",
                    "stationNaptan": "940GZZLUWCY",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUWCY",
                    "commonName": "White City Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 5,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSBC",
                    "modes": [],
                    "icsCode": "1000203",
                    "stationNaptan": "940GZZLUSBC",
                    "hubNaptanCode": "HUBSPB",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSBC",
                    "commonName": "Shepherd's Bush (Central) Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 6,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUHPK",
                    "modes": [],
                    "icsCode": "1000113",
                    "stationNaptan": "940GZZLUHPK",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUHPK",
                    "commonName": "Holland Park Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 7,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUNHG",
                    "modes": [],
                    "icsCode": "1000167",
                    "stationNaptan": "940GZZLUNHG",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUNHG",
                    "commonName": "Notting Hill Gate Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 8,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUQWY",
                    "modes": [],
                    "icsCode": "1000187",
                    "stationNaptan": "940GZZLUQWY",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUQWY",
                    "commonName": "Queensway Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 9,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULGT",
                    "modes": [],
                    "icsCode": "1000133",
                    "stationNaptan": "940GZZLULGT",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULGT",
                    "commonName": "Lancaster Gate Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 10,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUMBA",
                    "modes": [],
                    "icsCode": "1000144",
                    "stationNaptan": "940GZZLUMBA",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUMBA",
                    "commonName": "Marble Arch Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 11,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBND",
                    "modes": [],
                    "icsCode": "1000025",
                    "stationNaptan": "940GZZLUBND",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBND",
                    "commonName": "Bond Street Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 12,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUOXC",
                    "modes": [],
                    "icsCode": "1000173",
                    "stationNaptan": "940GZZLUOXC",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUOXC",
                    "commonName": "Oxford Circus Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 13,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUTCR",
                    "modes": [],
                    "icsCode": "1000235",
                    "stationNaptan": "940GZZLUTCR",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUTCR",
                    "commonName": "Tottenham Court Road Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 14,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUHBN",
                    "modes": [],
                    "icsCode": "1000112",
                    "stationNaptan": "940GZZLUHBN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUHBN",
                    "commonName": "Holborn Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 15,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUCHL",
                    "modes": [],
                    "icsCode": "1000044",
                    "stationNaptan": "940GZZLUCHL",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUCHL",
                    "commonName": "Chancery Lane Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 16,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSPU",
                    "modes": [],
                    "icsCode": "1000225",
                    "stationNaptan": "940GZZLUSPU",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSPU",
                    "commonName": "St. Paul's Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 17,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBNK",
                    "modes": [],
                    "icsCode": "1000013",
                    "stationNaptan": "940GZZLUBNK",
                    "hubNaptanCode": "HUBBAN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBNK",
                    "commonName": "Bank Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 18,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULVT",
                    "modes": [],
                    "icsCode": "1000138",
                    "stationNaptan": "940GZZLULVT",
                    "hubNaptanCode": "HUBLST",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULVT",
                    "commonName": "Liverpool Street Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 19,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBLG",
                    "modes": [],
                    "icsCode": "1000022",
                    "stationNaptan": "940GZZLUBLG",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBLG",
                    "commonName": "Bethnal Green Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 20,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUMED",
                    "modes": [],
                    "icsCode": "1000146",
                    "stationNaptan": "940GZZLUMED",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUMED",
                    "commonName": "Mile End Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 21,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSTD",
                    "modes": [],
                    "icsCode": "1000226",
                    "stationNaptan": "940GZZLUSTD",
                    "hubNaptanCode": "HUBSRA",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSTD",
                    "commonName": "Stratford Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 22,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULYN",
                    "modes": [],
                    "icsCode": "1000136",
                    "stationNaptan": "940GZZLULYN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULYN",
                    "commonName": "Leyton Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 23,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULYS",
                    "modes": [],
                    "icsCode": "1000137",
                    "stationNaptan": "940GZZLULYS",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULYS",
                    "commonName": "Leytonstone Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                }
              ]
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.RouteSection, Tfl.Api.Presentation.Entities",
              "id": "2078",
              "name": "Ealing Broadway Underground Station - Hainault Underground Station",
              "direction": "outbound",
              "originationName": "Ealing Broadway Underground Station",
              "destinationName": "Hainault Underground Station",
              "routeSectionNaptanEntrySequence": [
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 4,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUWCY",
                    "modes": [],
                    "icsCode": "1000269",
                    "stationNaptan": "940GZZLUWCY",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUWCY",
                    "commonName": "White City Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 5,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSBC",
                    "modes": [],
                    "icsCode": "1000203",
                    "stationNaptan": "940GZZLUSBC",
                    "hubNaptanCode": "HUBSPB",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSBC",
                    "commonName": "Shepherd's Bush (Central) Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 6,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUHPK",
                    "modes": [],
                    "icsCode": "1000113",
                    "stationNaptan": "940GZZLUHPK",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUHPK",
                    "commonName": "Holland Park Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 7,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUNHG",
                    "modes": [],
                    "icsCode": "1000167",
                    "stationNaptan": "940GZZLUNHG",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUNHG",
                    "commonName": "Notting Hill Gate Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 8,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUQWY",
                    "modes": [],
                    "icsCode": "1000187",
                    "stationNaptan": "940GZZLUQWY",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUQWY",
                    "commonName": "Queensway Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 9,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULGT",
                    "modes": [],
                    "icsCode": "1000133",
                    "stationNaptan": "940GZZLULGT",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULGT",
                    "commonName": "Lancaster Gate Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 10,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUMBA",
                    "modes": [],
                    "icsCode": "1000144",
                    "stationNaptan": "940GZZLUMBA",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUMBA",
                    "commonName": "Marble Arch Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 11,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBND",
                    "modes": [],
                    "icsCode": "1000025",
                    "stationNaptan": "940GZZLUBND",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBND",
                    "commonName": "Bond Street Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 12,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUOXC",
                    "modes": [],
                    "icsCode": "1000173",
                    "stationNaptan": "940GZZLUOXC",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUOXC",
                    "commonName": "Oxford Circus Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 13,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUTCR",
                    "modes": [],
                    "icsCode": "1000235",
                    "stationNaptan": "940GZZLUTCR",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUTCR",
                    "commonName": "Tottenham Court Road Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 14,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUHBN",
                    "modes": [],
                    "icsCode": "1000112",
                    "stationNaptan": "940GZZLUHBN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUHBN",
                    "commonName": "Holborn Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 15,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUCHL",
                    "modes": [],
                    "icsCode": "1000044",
                    "stationNaptan": "940GZZLUCHL",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUCHL",
                    "commonName": "Chancery Lane Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 16,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSPU",
                    "modes": [],
                    "icsCode": "1000225",
                    "stationNaptan": "940GZZLUSPU",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSPU",
                    "commonName": "St. Paul's Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 17,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBNK",
                    "modes": [],
                    "icsCode": "1000013",
                    "stationNaptan": "940GZZLUBNK",
                    "hubNaptanCode": "HUBBAN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBNK",
                    "commonName": "Bank Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 18,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULVT",
                    "modes": [],
                    "icsCode": "1000138",
                    "stationNaptan": "940GZZLULVT",
                    "hubNaptanCode": "HUBLST",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULVT",
                    "commonName": "Liverpool Street Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 19,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUBLG",
                    "modes": [],
                    "icsCode": "1000022",
                    "stationNaptan": "940GZZLUBLG",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUBLG",
                    "commonName": "Bethnal Green Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 20,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUMED",
                    "modes": [],
                    "icsCode": "1000146",
                    "stationNaptan": "940GZZLUMED",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUMED",
                    "commonName": "Mile End Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 21,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLUSTD",
                    "modes": [],
                    "icsCode": "1000226",
                    "stationNaptan": "940GZZLUSTD",
                    "hubNaptanCode": "HUBSRA",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLUSTD",
                    "commonName": "Stratford Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 22,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULYN",
                    "modes": [],
                    "icsCode": "1000136",
                    "stationNaptan": "940GZZLULYN",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULYN",
                    "commonName": "Leyton Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                },
                {
                  "$type": "Tfl.Api.Presentation.Entities.RouteSectionNaptanEntrySequence, Tfl.Api.Presentation.Entities",
                  "ordinal": 23,
                  "stopPoint": {
                    "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
                    "naptanId": "940GZZLULYS",
                    "modes": [],
                    "icsCode": "1000137",
                    "stationNaptan": "940GZZLULYS",
                    "lines": [],
                    "lineGroup": [],
                    "lineModeGroups": [],
                    "status": true,
                    "id": "940GZZLULYS",
                    "commonName": "Leytonstone Underground Station",
                    "placeType": "StopPoint",
                    "additionalProperties": [],
                    "children": [],
                    "lat": 0,
                    "lon": 0
                  }
                }
              ]
            }
          ],
          "affectedStops": [
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUBLG",
              "stationNaptan": "940GZZLUBLG",
              "status": true,
              "id": "940GZZLUBLG",
              "commonName": "Bethnal Green Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUBND",
              "stationNaptan": "940GZZLUBND",
              "status": true,
              "id": "940GZZLUBND",
              "commonName": "Bond Street Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUBNK",
              "stationNaptan": "940GZZLUBNK",
              "status": true,
              "id": "940GZZLUBNK",
              "commonName": "Bank Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUCHL",
              "stationNaptan": "940GZZLUCHL",
              "status": true,
              "id": "940GZZLUCHL",
              "commonName": "Chancery Lane Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUHBN",
              "stationNaptan": "940GZZLUHBN",
              "status": true,
              "id": "940GZZLUHBN",
              "commonName": "Holborn Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUHPK",
              "stationNaptan": "940GZZLUHPK",
              "status": true,
              "id": "940GZZLUHPK",
              "commonName": "Holland Park Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLULGT",
              "stationNaptan": "940GZZLULGT",
              "status": true,
              "id": "940GZZLULGT",
              "commonName": "Lancaster Gate Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLULVT",
              "stationNaptan": "940GZZLULVT",
              "status": true,
              "id": "940GZZLULVT",
              "commonName": "Liverpool Street Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLULYN",
              "stationNaptan": "940GZZLULYN",
              "status": true,
              "id": "940GZZLULYN",
              "commonName": "Leyton Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLULYS",
              "stationNaptan": "940GZZLULYS",
              "status": true,
              "id": "940GZZLULYS",
              "commonName": "Leytonstone Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUMBA",
              "stationNaptan": "940GZZLUMBA",
              "status": true,
              "id": "940GZZLUMBA",
              "commonName": "Marble Arch Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUMED",
              "stationNaptan": "940GZZLUMED",
              "status": true,
              "id": "940GZZLUMED",
              "commonName": "Mile End Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUNHG",
              "stationNaptan": "940GZZLUNHG",
              "status": true,
              "id": "940GZZLUNHG",
              "commonName": "Notting Hill Gate Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUOXC",
              "stationNaptan": "940GZZLUOXC",
              "status": true,
              "id": "940GZZLUOXC",
              "commonName": "Oxford Circus Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUQWY",
              "stationNaptan": "940GZZLUQWY",
              "status": true,
              "id": "940GZZLUQWY",
              "commonName": "Queensway Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUSBC",
              "stationNaptan": "940GZZLUSBC",
              "status": true,
              "id": "940GZZLUSBC",
              "commonName": "Shepherd's Bush (Central) Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUSPU",
              "stationNaptan": "940GZZLUSPU",
              "status": true,
              "id": "940GZZLUSPU",
              "commonName": "St. Paul's Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUSTD",
              "stationNaptan": "940GZZLUSTD",
              "status": true,
              "id": "940GZZLUSTD",
              "commonName": "Stratford Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUTCR",
              "stationNaptan": "940GZZLUTCR",
              "status": true,
              "id": "940GZZLUTCR",
              "commonName": "Tottenham Court Road Underground Station",
              "lat": 0,
              "lon": 0
            },
            {
              "$type": "Tfl.Api.Presentation.Entities.StopPoint, Tfl.Api.Presentation.Entities",
              "naptanId": "940GZZLUWCY",
              "stationNaptan": "940GZZLUWCY",
              "status": true,
              "id": "940GZZLUWCY",
              "commonName": "White City Underground Station",
              "lat": 0,
              "lon": 0
            }
          ],
          "closureText": "minorDelays"
        }
      }
    ],
    "routeSections": [
      {
        "$type": "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
        "name": "Epping Underground Station - West Ruislip Underground Station",
        "direction": "inbound",
        "originationName": "Epping Underground Station",
        "destinationName": "West Ruislip Underground Station",
        "originator": "940GZZLUEPG",
        "destination": "940GZZLUWRP",
        "serviceType": "Regular",
        "validTo": "2018-12-23T00:00:00Z",
        "validFrom": "2018-03-03T00:00:00Z"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
        "name": "West Ruislip Underground Station - Epping Underground Station",
        "direction": "outbound",
        "originationName": "West Ruislip Underground Station",
        "destinationName": "Epping Underground Station",
        "originator": "940GZZLUWRP",
        "destination": "940GZZLUEPG",
        "serviceType": "Regular",
        "validTo": "2018-12-23T00:00:00Z",
        "validFrom": "2018-03-03T00:00:00Z"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
        "name": "Hainault Underground Station - West Ruislip Underground Station",
        "direction": "inbound",
        "originationName": "Hainault Underground Station",
        "destinationName": "West Ruislip Underground Station",
        "originator": "940GZZLUHLT",
        "destination": "940GZZLUWRP",
        "serviceType": "Regular",
        "validTo": "2018-12-23T00:00:00Z",
        "validFrom": "2018-03-03T00:00:00Z"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
        "name": "Hainault Underground Station - West Ruislip Underground Station",
        "direction": "inbound",
        "originationName": "Hainault Underground Station",
        "destinationName": "West Ruislip Underground Station",
        "originator": "940GZZLUHLT",
        "destination": "940GZZLUWRP",
        "serviceType": "Regular",
        "validTo": "2018-12-23T00:00:00Z",
        "validFrom": "2018-03-03T00:00:00Z"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
        "name": "West Ruislip Underground Station - Hainault Underground Station",
        "direction": "outbound",
        "originationName": "West Ruislip Underground Station",
        "destinationName": "Hainault Underground Station",
        "originator": "940GZZLUWRP",
        "destination": "940GZZLUHLT",
        "serviceType": "Regular",
        "validTo": "2018-12-23T00:00:00Z",
        "validFrom": "2018-03-03T00:00:00Z"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
        "name": "West Ruislip Underground Station - Hainault Underground Station",
        "direction": "outbound",
        "originationName": "West Ruislip Underground Station",
        "destinationName": "Hainault Underground Station",
        "originator": "940GZZLUWRP",
        "destination": "940GZZLUHLT",
        "serviceType": "Regular",
        "validTo": "2018-12-23T00:00:00Z",
        "validFrom": "2018-03-03T00:00:00Z"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
        "name": "Epping Underground Station - Ealing Broadway Underground Station",
        "direction": "inbound",
        "originationName": "Epping Underground Station",
        "destinationName": "Ealing Broadway Underground Station",
        "originator": "940GZZLUEPG",
        "destination": "940GZZLUEBY",
        "serviceType": "Regular",
        "validTo": "2018-12-23T00:00:00Z",
        "validFrom": "2018-03-03T00:00:00Z"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
        "name": "Ealing Broadway Underground Station - Epping Underground Station",
        "direction": "outbound",
        "originationName": "Ealing Broadway Underground Station",
        "destinationName": "Epping Underground Station",
        "originator": "940GZZLUEBY",
        "destination": "940GZZLUEPG",
        "serviceType": "Regular",
        "validTo": "2018-12-23T00:00:00Z",
        "validFrom": "2018-03-03T00:00:00Z"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
        "name": "Hainault Underground Station - Ealing Broadway Underground Station",
        "direction": "inbound",
        "originationName": "Hainault Underground Station",
        "destinationName": "Ealing Broadway Underground Station",
        "originator": "940GZZLUHLT",
        "destination": "940GZZLUEBY",
        "serviceType": "Regular",
        "validTo": "2018-12-23T00:00:00Z",
        "validFrom": "2018-03-03T00:00:00Z"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.MatchedRoute, Tfl.Api.Presentation.Entities",
        "name": "Ealing Broadway Underground Station - Hainault Underground Station",
        "direction": "outbound",
        "originationName": "Ealing Broadway Underground Station",
        "destinationName": "Hainault Underground Station",
        "originator": "940GZZLUEBY",
        "destination": "940GZZLUHLT",
        "serviceType": "Regular",
        "validTo": "2018-12-23T00:00:00Z",
        "validFrom": "2018-03-03T00:00:00Z"
      }
    ],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=Central&serviceTypes=Regular"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Night",
        "uri": "/Line/Route?ids=Central&serviceTypes=Night"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "circle",
    "name": "Circle",
    "modeName": "tube",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.937Z",
    "modified": "2018-03-14T17:44:30.937Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=Circle&serviceTypes=Regular"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "district",
    "name": "District",
    "modeName": "tube",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.927Z",
    "modified": "2018-03-14T17:44:30.927Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=District&serviceTypes=Regular"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "dlr",
    "name": "DLR",
    "modeName": "dlr",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.937Z",
    "modified": "2018-03-14T17:44:30.937Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=DLR&serviceTypes=Regular"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "hammersmith-city",
    "name": "Hammersmith & City",
    "modeName": "tube",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.927Z",
    "modified": "2018-03-14T17:44:30.927Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=Hammersmith & City&serviceTypes=Regular"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "jubilee",
    "name": "Jubilee",
    "modeName": "tube",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.927Z",
    "modified": "2018-03-14T17:44:30.927Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=Jubilee&serviceTypes=Regular"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Night",
        "uri": "/Line/Route?ids=Jubilee&serviceTypes=Night"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "london-overground",
    "name": "London Overground",
    "modeName": "overground",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.937Z",
    "modified": "2018-03-14T17:44:30.937Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=London Overground&serviceTypes=Regular"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Night",
        "uri": "/Line/Route?ids=London Overground&serviceTypes=Night"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "metropolitan",
    "name": "Metropolitan",
    "modeName": "tube",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.927Z",
    "modified": "2018-03-14T17:44:30.927Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=Metropolitan&serviceTypes=Regular"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "northern",
    "name": "Northern",
    "modeName": "tube",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.927Z",
    "modified": "2018-03-14T17:44:30.927Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=Northern&serviceTypes=Regular"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Night",
        "uri": "/Line/Route?ids=Northern&serviceTypes=Night"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "piccadilly",
    "name": "Piccadilly",
    "modeName": "tube",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.927Z",
    "modified": "2018-03-14T17:44:30.927Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=Piccadilly&serviceTypes=Regular"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Night",
        "uri": "/Line/Route?ids=Piccadilly&serviceTypes=Night"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "victoria",
    "name": "Victoria",
    "modeName": "tube",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.937Z",
    "modified": "2018-03-14T17:44:30.937Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=Victoria&serviceTypes=Regular"
      },
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Night",
        "uri": "/Line/Route?ids=Victoria&serviceTypes=Night"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    "$type": "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    "id": "waterloo-city",
    "name": "Waterloo & City",
    "modeName": "tube",
    "disruptions": [],
    "created": "2018-03-14T17:44:30.957Z",
    "modified": "2018-03-14T17:44:30.957Z",
    "lineStatuses": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        "id": 0,
        "statusSeverity": 10,
        "statusSeverityDescription": "Good Service",
        "created": "0001-01-01T00:00:00",
        "validityPeriods": []
      }
    ],
    "routeSections": [],
    "serviceTypes": [
      {
        "$type": "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        "name": "Regular",
        "uri": "/Line/Route?ids=Waterloo & City&serviceTypes=Regular"
      }
    ],
    "crowding": {
      "$type": "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  }
]