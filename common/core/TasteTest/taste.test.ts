import GetRecipes from "../Pantry/Utensils/GetRecipes"
import ServerAuth from "../Pantry/Utensils/ServerAuth"
import UrlUtil from "../Pantry/Utensils/UrlUtil"

describe("ServerAuth", ()=>{
  it("Should split the body and get the token", ()=>{
    const splitBodyText = `.ie11-redirection-487b6845ff999f0b.js","__STATIC_SCRIPTS__.jp-page-width":"/_next/static/chunks/__STATIC_SCRIPTS__.jp-page-width-96ef9de8377ced5a.js","__STATIC_SCRIPTS__.mocker":"/_next/static/chunks/__STATIC_SCRIPTS__.mocker-b03cb4fa089dcaaa.js"},"serverAuth":{"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzA0NzM1NjgsImlhdCI6MTY2Nzg0MzgyNSwiaXNzIjoic2VuZiIsImp0aSI6IjhhNDVlYWRiLTk4ODItNDhhMC05MzJkLTM4ODIwYzQ1NGY0YSJ9.lygqsNNZ2r37wy6QZ8FmQik6DBWbhm2WIoN73n-93QQ","expires_in":2629743,"issued_at":1667843825,"token_type":"Bearer"}},"filtrationIdentifier":"recipe-collection","systemCountry":"DK","ssrVariationValues":{},"config":{"available-locales":{"locales":[{"locale":"da-DK","name":"Danish","default":true}]},"zest-support.unified-layout":{"isLegacyWhitelabel":false},"optimizely-web":{"disableOptimizelyWeb":false},"experiment.optimizely":{"sdkKey":"VfTN6BxK`
    const expectedToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzA0NzM1NjgsImlhdCI6MTY2Nzg0MzgyNSwiaXNzIjoic2VuZiIsImp0aSI6IjhhNDVlYWRiLTk4ODItNDhhMC05MzJkLTM4ODIwYzQ1NGY0YSJ9.lygqsNNZ2r37wy6QZ8FmQik6DBWbhm2WIoN73n-93QQ`
    const token = ServerAuth.SplitBody(splitBodyText)
    expect(token).toEqual(expectedToken)
  })
})

describe("UrlUtil", ()=>{
  it("Should generate a url with skip and take params", ()=>{
    const expectedUrl = `https://www.hellofresh.dk/gw/recipes/recipes/search?country=DK&locale=da-DK&product=classic-box&take=10skip=20`;
    const url = UrlUtil.Generate(10,20)
    expect(url).toEqual(expectedUrl)
  })
})

describe("GetRecipes", ()=>{
    let auth = ""
  beforeAll(async ()=>{
    auth = await ServerAuth.GetAccessToken()
  })
  it("Should return a positive number :)", async ()=>{
    const getRecipes = new GetRecipes(auth)
    const count = await getRecipes.Browse()
    expect(count).toBeGreaterThan(0)
  })
})