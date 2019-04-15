# 比分实时在线
-
  summary: 获取即时比赛详细信息
  request: detailUsingGET
  method: detailUsingGET_TYPE
  url: detailUsingGETURL
  raw_url: detailUsingGET_RAW_URL
  params:
  -
   name: serverSteamId
   description: serverSteamId
   required: true
-
  summary: 获取英雄的简要信息
  request: heroUsingGET
  method: heroUsingGET_TYPE
  url: heroUsingGETURL
  raw_url: heroUsingGET_RAW_URL
  params:
-
  summary: 获取英雄的详细信息
  request: heroStatsUsingGET
  method: heroStatsUsingGET_TYPE
  url: heroStatsUsingGETURL
  raw_url: heroStatsUsingGET_RAW_URL
  params:
-
  summary: 根据match_id来获取历史比赛列表
  request: matchesUsingGET
  method: matchesUsingGET_TYPE
  url: matchesUsingGETURL
  raw_url: matchesUsingGET_RAW_URL
  params:
  -
   name: lessThanMatchId
   description: less_than_match_id
   required: true
-
  summary: 根据match_id来获取公众历史比赛列表
  request: publicMatchUsingGET
  method: publicMatchUsingGET_TYPE
  url: publicMatchUsingGETURL
  raw_url: publicMatchUsingGET_RAW_URL
  params:
  -
   name: lessThanMatchId
   description: less_than_match_id
   required: true
-
  summary: 昨天涨停，今天长上影线
  request: stockFxUsingGET
  method: stockFxUsingGET_TYPE
  url: stockFxUsingGETURL
  raw_url: stockFxUsingGET_RAW_URL
  params:
-
  summary: 前日涨停，昨天长上影线，今日暴跌
  request: stockJhUsingGET
  method: stockJhUsingGET_TYPE
  url: stockJhUsingGETURL
  raw_url: stockJhUsingGET_RAW_URL
  params:
-
  summary: 获取队伍的详细信息
  request: teamUsingGET
  method: teamUsingGET_TYPE
  url: teamUsingGETURL
  raw_url: teamUsingGET_RAW_URL
  params:
-
  summary: 获取即时比赛列表
  request: topLiveUsingGET
  method: topLiveUsingGET_TYPE
  url: topLiveUsingGETURL
  raw_url: topLiveUsingGET_RAW_URL
  params:
