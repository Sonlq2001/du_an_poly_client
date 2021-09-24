import React from 'react';
import { ProductFile, Title, Product, Eye } from './style';
import { Link } from 'react-router-dom';

const ProductProfile = () => {
  const [toggle, isToggle] = useState(true);
  const str = 'Website xây dựng bán hàng toàn quốc';
  // cắt chuỗi khi chuỗi quá dài
  return (
    <ProductFile>
      <Title>Project</Title>
      <Product className="row">
        <div className="productItem col-3">
          <div className="productImage">
            <Link to="/product/1">
              {' '}
              <img
                src="https://i.pinimg.com/originals/de/91/27/de91277cf048a4954346d2ab353291a9.png"
                alt=""
              />
            </Link>
          </div>
          <div className="contenPro">
            <p className="title">
              <Link to="/product/1"> {str.slice(0, 20) + ' ...'} </Link>
            </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div className="productImage">
            <img
              src="https://dean2020.edu.vn/wp-content/uploads/2019/03/anh-thien-nhien-dep-3.jpeg"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">{str.slice(0, 20) + ' ...'}</p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div className="productImage">
            <img
              src="https://sohanews.sohacdn.com/2018/11/6/photo-1-1541483744832650156783.jpg"
              alt=""
            />
          </div>
          <div className="productItem col-3">
            <div>
              <img
                src="https://sohanews.sohacdn.com/2018/11/6/photo-1-1541483744832650156783.jpg"
                alt=""
              />
            </div>
            <div className="contenPro">
              <p className="title">Dự Án 1 </p>
              <p className="view">
                <span>
                  <Eye />
                </span>
                15050
              </p>
            </div>
          </div>
        </div>
        <div className="productItem col-3">
          <div className="productImage">
            <img
              src="https://wiki.matbao.net/wp-content/uploads/2019/09/iframe-la-gi.png"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Ứng dụng phầm mềm </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div className="productImage">
            <img
              src="https://dsgc.edu.vn/wp-content/uploads/2019/08/123.jpg"
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Thiết kế đồ họa </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
        <div className="productItem col-3">
          <div className="productImage">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQXFxYYGRgYGRkYGBgfHBgYHBgcGBcgIRgaHyoiGRwnHxgYIzQjJy0uMTExGCE2OzYwOiowMS4BCwsLDw4PHRERHTQoIicwMjAyLjExOTAwMDAwMDAwMDAwMjgwMDAyMDAwMDAwMjAyMDAyMDA4MjAwMjAwMDA4MP/AABEIALkBEAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAADBAUCBgEAB//EAEUQAAIBAgQEAwQHBgMIAQUAAAECEQMhAAQSMQUiQVETYXEGMoGRFCNCUqGx0RUzYsHh8HKCshZDkqKzwtLxUwckVHOT/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QAMREAAgEDBAADBwMEAwAAAAAAAQIAAxEhBBIxQRMiURQyYXGBkaFC0fAjUrHBBRVi/9oADAMBAAIRAxEAPwD88FPGlTDDUhj0Jj1VqAzE+nYQS08bFLBBTwRaWLBhMjIwNov4WC5ems82CrRwTwMAkWj0wwYGwPzhMzwrTcXBEgjC4yhw9la5URMjsemD8pvEHEVd15zPQ8KhUyBY+kkNQI3GPhSxUZAfPHiqO2LrVxmZX0fmwcSb4Jx8KGK60p6fhjX0XDCsIjaRlkj6Pj0ZbFhcrj36LhvFgFCSRl8e+DisMpj45PANQRxSIkrwseilil9Ex6MmcDeI2wyatLBTSw79ExoZbClrx1Wwkw08eijiquQwVOHDCtUAjLSYyP4GPhRGLZ4UegOPF4RGIGsp4M0LpmGWEhNSGMCie2Oi/Zqj+uPvoS9ifQYQ1hO9nY9Tnvo+Pvo/ljoxkPKPX+mPmyAFzAGB46weyNOb+jHtj76Me2K2YzVFOuo9lE/jtibmc272RdI+Z/pjhWvFOmt3MfR4wCpUUdZ9MetkqhuQfU42MlpuSg9T/IYPiiL7P6wasDtOCfRvLG6dUD7Q9AuGTmljp8f0wjVTAaI6kT6QTvBx8GwVVTvj3QvfFVC+kZi/9wM1Rg+WHFywida4UpoO8YaRj94YJB6MZNrDzL+Z6tP0wenlmOwnGRVPUD5fphnKZvQZGCWa2IFpU93mOJn6E3VT8sbTLxhwcUncYNRdH2F/XE/EcDzLNK6amfcb7xZcspGxnHqZGCLHDbJ2U4+FWNwccHvxGNIqfMPqJUyWXoFQPwO+H6eRpge6I9MQ6dYdsP5TiDC2488YK1CpyrH5TdSrKcMIPP8ADAGlQYPSLYzl+Fs2w+dsWEzYKyTGFUzPr8jgpWqFbekV9PSDbvWLVeFR2Ppgf7P8sPrW9MPUnVh2GObUugzmAaam3EhHhwx4eH4qVnANo+OBNnEBg4ouoZheI2lQG0Q+geWPV4d5Yp0swh2B+WDgC2A2pYThpVvJ1Hh3lhujk1XpOHDVUWETjwERcjGV67NzNSUlXiKVUmwFsBbIsbxAxTp1VOxEY9rV1AuwA8yMS3sOI5UdyL9BjHhyuHK/FaI2dThGpxVOjr88Nvc9SZVZivlDEA6fMD9cTc1wxd211D5m39MPniC9W/CPzwKrnqfVj8jjt7wFV+Ej1sreyovldj+mF6lGp0kDyEYsPxCmNtR+QwnV4l2VfiWb9MVV39JB0X1kirk6h+9jA4U5+yfjip+1D3RfgP5nGW4in2qs+QgflhzUf0ktqesnfsw9/lj48Ojc/PDNbPUjsGPx/U4X+mAe6nzbA3VD1JlVkZDjYxhcGQY9pQJ4DVGmlOCJgPjre4Mbgb/LDGVdW2Pw6/LDAr6zt1SFpzgqzjaUsb0jvgkCOrt2ZlTgyNj5AO4wVAvfCFZdKh9YRa7dycESpj5KYx7rQbsvXqOm+E2gTSKz9mFNQEdRjS1D3x9lwrjUrAjuCMHWkvcfPC2EfxieTMJVPfBkzD98fLTXuPmMe8gMalntInCMt+pVa4E0My3W+G6GZQCTM+X9cT3zlEb1aY/zr+uA5ni9BB+8Vj2Ugn5zAxJqW7EoNUEzcStUzan7JOMrWHaBibk+LUXEl1Q9QzAfj1GDfT6ET41OP8a/rgGlbEZdSGFwZSU0+rN8J/XHvj0vvN8Z/TE45+hAPipfsZ/AScLPxvLjq59Kb/zAxM0r9mH2m3pK1TMp99vSCR+OAVatM7u3wED5Yl1eO0RslVvRIj5kYEvtDQO4dfUA/kThfBh9rHEt0qy7KzfEE/8ArC+Zyavu5PqTiZ/tDRiQKh9F/nNvjjxfaWlF1cegBE+s4XwiDcGMdSh5jrZCmDtPxP6Y9TLKCOUj4fqBia/tQn2KdVv8sD8JwpU9qGkjwr9jqBHqSMHYT3+Yp1CDr8Toa5UCxYf5VwlVJPTUP4v6YmH2gf8A/Gf4Bz6/ZwN+P1txlnjzD/8AjhRTA7gbUKejHTlW8hgNTLef4f0wg/tDWM6aLdNlY7/A4Xre0FYGPDgxsyEE+cRtY4oF+Mg1YdAyi2V7fkMBbKYR/blY9D/wLv6xhavn8xN1dZ7hlk9ht8sVsB3ImqTwspvlfPAWy+JtU5k7JW+T4DUpZiZKVDHdWOO3KIpLHqZQ1d5t/g/pjdPNOtyLd/Dj8hh+nTw1Qo4fwO9xkVqscbRItTMhjJif8C+nVb/GcayueidLx6Ul/kMdGuX88Fo0DhfZyc7zLbyMFJAHEw27Ov8AlSPMkR+F8Fp5sHarbp9VT23N4x0SUTg1DLBRAQAEzAA39O+FbTP05jLY/onNLWcW8T0LCmB8ypBwanmuhqknrpana+/7snHUiTbpjQoA9BfyF8L7PUH65QAcbZzi1qUSXqn/APmYPWDEj0gY8LooBfxNJ91np0oJ6ACBPWTPTtjpqGRUe6i/BR+mHlyh6jClCPeaUWkx4WcdSzjKBBJUmbU1Uf8AKwB/9YIpqEyrgDs4XtuSpxT9q8nUYKqUHqDfUhQREWIPMfgevfbnarVqO6ssgHSQ4I77LzHy+eMtRnU2BjhLciV8sH0j61mMwYmNulwZ9Rgzuun3K5IFz4nl1AmJ9cShnwBpMOSfdIa1rbyREf3OCq+u/gmItpsP8OskDrtvbzGI+Mwj7RGjm12YVgsx+9JN7mJEDoPlg78QXwyKDVg5sDVeBA32JLHrt3v3l0+KKBB1Dcf7wnfYzqAjz74ImfoHU2lR0MXHkBtBmbCPxGD4rzgojNfNBKcHM1dcknmaY3EEiBYdR1tODZfP0DymtWaFv9aRNhcyfTticrUWgIbm4kKABHkL7G1uu8Tgq7EMSZBA0qD5C7kz17b9hceIRgw2h6WcVWOr6QtIG7LmVnylSBabe9scWcrTy1QWzVdf8WYWb+Un+ziPT4eogKoMWACBQD5NNjfobdsHGUCqQ2s+ZJ/CN433m2AXMZcdR6tlMstjnq89frSfmAlvU4Jl+B5erOnM13I3+suNumm24+YxE4hk1DCaFQm5DEPpAkggHV5R8Qb7YcylTwEOhUpu8swHOABexaQDb7PxiJCGtYgRxt7AlBvZOkTAzFcGSAPEWZAmwK7gHH1T2RpoJbM11Hc1EUD/AJQOmJ2U9oCmpkXLnXJMAKzHa7JUJ23I+WJnE61Os3iHVTm/K1QBiSSfeLajHboOmKhnPUBNO3E6On7KqyzSzVcr0IdWW1j7sTiZxL2WrJGl8xV7ldNr/wAdUEfAHEd6dMxp8R9rByJJ2I1KPym3nihl+LZinAarUUxYGpqiI35YiCNu/wAzuNov9M8ifPwrMRZM3PT60Rvb7W9/wOAtw3OxZM1fu5P/AHT8xg2b9pMypMZjbsEMbC4jUYM7djh7J+1uZA/3VYiNX2TNttJ7EHbrhSzcicFp8ZkE5XNiQEzK3v8AvD+k4XrUcwD9ZUri0madaw+LeeOzX21ZtU01pEbB1LahBN9LjTt2OJud9vMwoWEy8EXIFWxmLAiO2/4Y4M95xSnbkzlWzTyVFZ5HY1Da5neRYbTacCqcWeROZqdCAS5v5c046dfbzMAgHwbib0jIv1ipG399ML1fao1TDHLyOvgUzJPdXkxt1GGDnuTKr0Zz68WcmFzNQk9NbCTuftT3xt83mD/vqo8tT3/HFyl7SMl1TKsY/wDg0tba4IH5YL/ttWn3KBjcAGfLd7Dz88UDyZRezJWXpg7nFKglIdzhKjTnFPKcOZsbXcDLNaRoljhVB+kcoVqQHu4IaiHZcEo8KUe83yxQp8PpgbSfPGU6imhuCTPRWlWcWIAk1KwHQYay9EsJtHkMeVcpB6YJSqFRY4r4pceWALs94zRy6jqSfTDOWy69d8LayepOPmrIpAZgC0wCd43jBYNty1oi1F3YEfCqO3wx9qnofniJnfaBKYgA6wWEOGElTBAtzGTYdRMTidU4vXdBUOpFtKoyppBvzSQ0QDsSZBFiMZHdV7uZXxCeJ1bMqiWIUfxED88K/tygCVBZtO+hGIHXeIPwOOWzFBiVBChYDg0w5fSQJ94Wj187yIZybUlE6Y1NvqclSBI2J0CLkFhjM9diMCEOZ0J9pMvHuO2xuFjy+1v2x5W9rgDCUlgR79TQY68rL38zjm2zKsXU1EAAkSSW3gx4bl56RAN7zgNbKLVB8MNqWCIIYlZggBm5mveSIAXyxIbibtOaqepXzvHa1QOhp0FRpKgNqJEgkjkuZ3MA7+pl0nswagjEiRDjWJWdMSIFhuqm3phbN5QJTDg1kMkc5NIkgSZgromxgAjeO+Elp6GU+I9YlTyeIgXSQQANLc2/vLHXsRim24uDIliTmOU+K5dDFVOcAkKVdigOxnQQTG7XwfK1kqguhZVIm97CL+7KiCSSdvPAXzKagVRtRJQMySw1REShJboRzb3nDmltMu5F9KqylTrFyLDlnUV5lFwY6HBG0ZN4MwOdrUqg0eJzAg6pYEqbwS4IiAbm3UAbYNTyrKkU21aSCWUofgTpkTFyNo+z1HmKSmsQguSApZI1ymoDxJGpQoECBMReMMZaleJjlYaWV7xIPvqOUieov8xRioWwMABveK5/MgqQrhHBCkKGAFwdIuFMnUZvJO8RiRxHI1GUaagJBkKdStfs1riR88dBm6KtT0vdwsH3WgEXB1MLajEqSRAJAkYn0a1ZR4dMhKhMMvhso1yNN11oD6xiYKjjqEi/M8ydBGULWofWDcjS4IOxb7rbG9zOGV4Q+oEVk0jmg06VgVsOvUqOn6AzfCK2pSKK/egApG41QI8idxt5Qll+IPl201Dp1NF6bRBkamFRYMm/W3wOKdeWL3mVc7xI01VqnhSNzBixtKqGgGbb9bzE5zlakBqITuWXQwvs11i+0jaRaJicvHRrUtyiBAggEzdhAiCIJA2v1tj183VcA0ajoQCQrgG0mBJsBG2rpMTOFKHniHdfEZoVtbTESD2hpsYUluurtcHGq2o6dBpxMENThosReOW0m4A5t8B0uyyEToFuCrM0zHhElLyBuLmcLtTqipJSXZoZVVWmAewkKJ6yPIYIzOvaM1uJ1BqByzkAEiXUgD3SQwTlNxaYvtGA5LM07BWuQG08wI7+7t6hY+eA1zVDAhyHHRWKzvtAItJ+WPlrVC2uqaQUEEq7BtV+xQsJ/hvtbDhcRS0ddS4GhlYWkEqWU3MXIjrvBHbCcadIZYEwSaZEdbCQO9o9NsEpodU+NCmYC0lAMXHvqI7Eb2+TVTNwFQMrtAsVZREwAvKQCCrHcTpGOVDAWEUy2Uo1CzNmDQtASpILWJkFFMCT1OPq3B1mEzFOoCWs1ZQSL7Cow322G+CVatPeBF7lWLALZvdmTeJN9p8l8zUWpIVwukzphOsXKlTJHfqDN74psIibhC0q8YdocSI64hLUODUmx6TUlbmYKepdOJ01HiffDdPi0C2OYpv2GCJPc4UaVDL/APY1J0f0/Ub7Yay5U9DHyxAosQBvhzLZwr9kkHuYxQacfpjjWN+uUOK1wlJjDEEFQF3JI79PU44nI8RfQy1CVW5eC523PukR6Newvjrc0KFZNNXuDp57R7p1KN+uAZ/JZeqAHQMQ06ue52v974g4jU0dSqccQNqkQXv9pHyrsQFoKahbmFRZ1RFz4TDSCB1AUT6ydvVGppqFHnQwFbTWNpQhSVTc/ZB6g3tgHF61PLtYtTUQYpq4epCwpNQkoF1SIKyAsAQcC4ZxqhWkPVrUmEkBqo8NhEWYIDTaNwsTe94x5tSkyMQRxNKVFZQQeYZa6BgHqOtS0pUq2FtRUgwqEnSeaTMixNqtJaenxdBEyz01pAlzFhCyrEk3JFwLHc45puFZNdWvNoxJGiSxU7TrampYdO3X4OVK9AKpFWgiUg2kUdRqaj5vp1ncDl0803xJlva1/tKKbc2+8ZpKhGlYrAOzMhTVUDKJCogUgXt70HTfriXR4kaNRzVGjUNIKU2V4E20uNBXuDNwDeMfZXj9EJ4dNdAhgzMWLkMDJVkXSjCT9g+RtjR4s9SopXMCuuxo1Qy6gbFSD9XqHdT5jthwrC+4YibgbWMsZPMUwPrKb113WpTl6ZcRBsSEIB2YCJOJr54q0Mr0jULwxhww1cy8rK2gTAEkQRy7sTPlFqMjLT8BrDxKbVGZQJEjSEG0QObrti9xfgNB9NRvGrEKAHUcgEcvK8TeSdJG+2+AKZHmtz/MdRyb4vONTPtqgVtZbkRaVNVJBMAEso07xENh+r9dSVqjKzywmqx3sNHjIABs3vWmIN4P1f2aBqeJTauHDBh9SghpkbP3wy3C0DhqniUaoliRTD0yWswKEgqCPsgnpt0saZPuiJxzEKK1QsU0OlWRpTN0GFMiSp20oN+wMdcOUcwtLS9Rmpke6rnYzc6KF4MDnIi8DbDeU9mlYMaDobjUqtSAY3khavibXHvdca4bwllZqYMFgZZamSpvYW5Apn/jBufPCshtkfvACPWK0OMJ4gM5cpEeI1T6xj/n1MsCQATAvJMgYZr8epCmKemgzk6Qol1eneT9Sk3JFrdbWjGMv7B6yP8A7bMU1GzLUp1BUsPue6b7gxbCXFvZnM0SyUKRp0x7xFamzliBYvywOmkR1mcAUlY2AMJdljFfKrS0sCKbOJUGq6ppOoEkVdO8WBkjTJmZPmUNSH1AIgXlfxBLECDy6yDvExouD1wjS9ns3UpqCoMNq+sqLaAYFpsZ29B1w7U4NXI1Ki0naJAZV0sAOgtvqJA3OH8BuIvidwnB+JUAxFemraQoOtSpME3V6HLNxv2MxbFPiTcMqLyUqizBFRKmtVcDqrvuGkREkAkYl/szMJ7ihpIB0EQDBvpZhC9Y9MD4pw6siBqoKqSSW1yFaIUgX0Nc9QPywxouDwRAKgtJRcqR9c5M3Y0jPNsJLd7b97gYZrZenVURmJqKY8QLp3hFk9CbDcbT1Jxj6fKwWctO7wdR2vrEEQdx1HWwHtbMlh9WXmRyC2xEwSsgATsQL33Mra064jFDgyhFDeI+okjeZFphCWVNuo3vsYZOTBmFcxJhVDHQBYCTuQrBe5G95wLL8TqoLkmbFiVMFo1LKrE6ASLE+7vYEv8AtJGkFBriBGq5YfflR1P/AAmN5wdhPc7cBNfR0UDUWAuO15CkGbsIvaQbwIE4AwA1gLJbWFBcgEwwFmgDYRt2i+KFDimXqqDqJ08wBciAAIgEEERIM9bTaw6ABKqNOlCG1BqSksZ1KaZMTEkQZ5gZsBghSs4kGJ5zLFS7w8AoTAmblTzAkyIJ77EEyMIMCNSGNR631A6QdlkMYm3ZYi+LX7OOqF1KCxUeFrgBYOkrBAnT6FYmC2ERnG1sKq8y6QylS0tq6IoKrYQag3ixANu3ERbCIIPjhmmo7YBTODLUx6wWeG1QxpCMFpvGwwn4uN0ajGyie/8A7xRVg8RpRpPEFo9Bv88GXPSYAEef5264SUSLmIk95vYYe4bkSw6rG7FT7uxgdTM28vIxTxFTkQqGqC4MaWgfMsY8vh5R1xupQYDf3bmOneP7+WGMrl2anFMh9JjqWEkkSFb1g7YUrcOrEsWDnvZo9IwBXUnmaRTIHrEuI8Lp11GsWBMNMEdLR/dscz/sdWLFUCsLwxdR6SpI38pjHaHIFVltri5G4gkGNjcW8xgRroNg5I6Lp0kW6zI+Rxlr7KmRz6zXRBUZnGD2NzAIDgKTsJmRMEyBBFuhxQyXsgoYyWcbAqsDz5iSBi1nuIvVYaopqIQD7qzNzuxkkn8hjsuIcOXYAgCAsXhRtHwgz1nGKtVp0doYZP2l0pl72PE4jLcBpqGYU9JQrAA6xqmd7Ww1knrEMAURptrp0gel1JXm62vHxGLYyVekGFKohQtq0umoAxBgi4sBbyxlquZKmVy89GAqxY/dm5kd/liVXXgiy2t/iOmmse/3kU5Ko2pcyz90clvDPcGCAvS9hvtaS5Th/gmQrIIkMubAUjvHKCB32E4b4vkWdPriYm4p09Ck+YJZmPaT0wuns1l1UvUUIq7tUbSvYb/rjK2sVhk84sBj6SwokHA+pgf2tTgxWdgvvA1qhA320JFTYxBJOKGXySvVRDToFnBNOoplXcDXGnXLHTsTvpvciUqVXJUmik7MSObw2IpmLgGoSFPXvufTEvPVakuzVVeWLKgTVoMzAdhZR5kjrBxNSWPkuPncficzbRmx+UrN7MtqKAJtJLwCI6b9enxxn6HmKJA0nRBIKojMN49/pJ74lU/a/OUioJTYTqpJJUbSdO8dQMOn21qGCaldTB91cuQBt91QfWAfPvoVtYpzYiSJpHi4lrKZ1vCZmetCgAjwyh1EwOZWIjYxM22whxHMh9IBJBhvMdLnvvhCtx5XWaj16pkMFYU0GqTeVJANz9nAqvG3ayUqaju2pm+chT/w420Xfkrn8SVQji8oUyTYFo8iBPabeQ37YZenUdCQQCvOD2VRESNyRBNunnhLKcXYrJWkP8v8pw3W4mXTQyNpP/xlR8wACfQnGoh8ECRuvZhaGc5QXaDAi3l3HnhrLZiWUMeVrTEelz3MCfPEnL1KIIAWqWk2MAT0Mh/j0wNqlT3WEdZAuf7/AL6YuE3C3EgatjjMa4t7O0Tr8JfAcke77ttxpMxN59TjkqtGX8KrFJtM1G0gDREgBgeaSBsOvcY7/L8SSvA1RUIA0t9o7HQ32vQ39d8QvaDgFOseYQ22sbjyPcY89qPXBmkVO+pyOZzJUUqdPmYgB5uTzalEk3EHYR7xB74cOXQeHyFy4aNSMQoY6ZCnZ9QPkYEYWzHAK9I6lAcAza9h3G/TCOcr1HAiJCqkKAICyQLb95M+uIMpGJUNeVqGbeeVRTbw6kLAhjGsQFEG6RsJ26YTbiaNoLKAQhUlI1QAZtFoEAdREzJOM0eKwOVIqQiqWJJQKQZBO912EbjeMDr1CdFktfTTT3YEk83vE3kG2+OF+4THlzzUWXmUPYksdUypKlgdyATsACGvipmuKBEp1FVa51SCGdWCaryofUJbUo1d4uTeV7Qg1KaVSF1MFcsDCqGEMAuokjXAkAKNAHXCJaFVG1nSCbwChJkaWEz1aCb6fKcHykZEXIOI+tTGwCcLpc4OrRuZx64tPFYWhUQYOhO3TywrJ3Nsb8WRvAwZIgmNs46nbudsb4bxUU3DPqZIdSovZlIkAmJBIPTExmB22H4nDObp2XT7pFj3I96x2v3wGII2nuVpqVNxOhyfEcm5gsVb7JrKAokXjTqCkedr98N1cvTs3iUyFHLFZZg7RzWETtjjPCx5mGAiEvtc/wAoxE0s4YzatU2yon6RR4TSNBGoENTMtqBkFzAcT3BEaf4esyV1yLDpbHCcP4jXoK1SjVenJCnSYDbxI2YjFXh3Hs1VkHOOryIDVANU2tqsTPTzGMFSjWS5DAj48zTTrIbDbYzpP2QtTl0sXNhA6xP5fywtmxVyoCjOLSUTyMyORa8UoZt+kb4XqcPztYeHVq1Sh95bIp9QAAbnrvglP2TCLYKY32gepm39MYWqoMVHBHpa/wCZrCk+6LfiQz7T53pXbe006X/gY9MFb2mzzLAf4inTn/TGLn7FUDUXphe5dQOvUmMT8zxfLUAApXMFrAIYUHa9WCpvawO/TANag5tTpgn5f7h2MPea31imXz2a16/pLsOzhnG33CIUjvbY3wrneJmspqVaj1Ka8ovY9CypAVSZjbphDi/F61YkEBEuNCagD/iMyx6dvIYo8HyIrUBTC3JnT6Gd8b9LRRQ1V1AIB4tj6zFqqp8qKTkgTyhx3LKAq0ajSRzuy0wkmJtrgAE3J+GL75R2j9zl20idbr4ike9BchSOzBdrg4WyHsy1+Tt0GOhyGSWhSCmvoRQIT6p2EdFDq2mflttjxqlRXcCiCT9TPQxTUmqQBOIz/ABSV6vieIuuNUsQ3UnURLESoPcsIN8TaKBiSTt0UNsOg/qcUfaTjIrV9OrUuoA6zITppFoAG5YAST5DBc7SZOTRC7KdO68xkAgbgAie049Jd6iznMgNr5XiT9dpiPuyekb/ADwajmCPsg95mfTHi5VtoO5J+ZFo6dPhjRpwYtsDIntt8I/sYqtbqMaXrCJXEzAFot067n+74a+rKQVIcG5mRHT0NvPf5gy2UZ3Raa6mf3QpF9ybHaAPTHz0nWzIQY/r+Q26/hjUle3ck9EHqfEEEFZN+vfDFJHa8wQehbUAbWk3uYI6dY3wCkYJkGIIt0mY23/DcfElBweUzBsSLECYkR1B+cnGhdTu5mZtMAIOgWWoCjwwAYGRytMi5FrxirluOaiErIQ5jmS6me6zY9LSPIYDmgmphBKi9JlAAIKySwgHaP0g4l5ioyqAVMnqRup2iemKsi1Mnn1mXcUNhOieCSADIMXBH4HCFfI5ZmYVqYV5BDSwHcglbj4zv0wvkeLVjC6pH8YVgI82EwB54prxChWAFZtDbE6eU9AQVFhtv88QfTsB5sj4cyyV19fvJlb2UpE6w7hSZswYFbSAR8RO+IWb4DVpFmHMpBBiSdJ6ERO3UY7CnRWkfq8xSKndS6lT6wbH5HBKmZpGJEEdUOtfPa4/HEDp78SwrgcmfnT0EeNbMkCFbSWEAQoi0Dz/ADw79BV6IDMiOvNd+SoswCBOlCCYANyDsBt2OYyuXqiC6sJmG1L6bx3/ABxC4nwfL6dFOoZmZ0hlG4iWE9ehO2J+A4NhmN4yHmSqb4L4nYYTWpjRrY9ETyylzGGecbpr6D1wvRfHtSp2wYCvUfFNdNrgfauO5J7R+OG8jkzVp6UMurE+HaQpA5heWXvaxjCaVyZRE1QJmQBa0sTEJfYkdPOc5ynTc1HVYXlQbkMxEsRPQR8mFhjPVew5tHpoSYbMUSgDVHpoL21BmMGDCi8/2YxjJtlqky9RSBu6E6rkn93qI6Wj44Tp8PBICwzGOUAnfYGNjhqtQ+jjWORx0a7C+2iLTESYEYizXxfPwmseUweaFGRoZql7AKy3jfmFum1++FqNZnbQigHpYlvmbd7wMZbirmy0qSnqQrG9xYFiJ+HTBzxCsyMxpoqKIZ1XSTcW1GZkwCAL7G2OG63H3Mc7bwXE3Nl1lx05iV7csk2tv1wh4fli5wZ6OYY0yq0qpuhLALUMxp5jyuZEdDBFjAJz7MV1J1U2H+U4ia6qbNiWWluyMyTkuGF1ZgslYmN47x64qJwtXppANlCsII5hv6zBMjHiZapTYQHBF5QGR/T174fp081WPJTMG3u9/JbD4YZSreZ2AH5i1Sy+VFufxJ4VqbBa2hk6FrsI2EqQfnOHcrUUCaZYXJGhmBHoQZHrOAfs8BmpmolVpE6SrBDMXde0HlB3F4xnNZWohVlHKDHr/TGyk9JFLWspxnu/wnn10quwQm7DNh1aM5r2kzDAgl2CnTzsxg+c74n1c9Vcw7W7D9O2KqBavMjFXEAwxExtMbxeMWOC8HoCXqq9SQSeaHDd/M7/ADxh1+obSr/5PFsAzToaNOvm3mHN8kfeQFqeKaYqIKmghlmxYAgspY30sJEHacG48xWs1iIZdK2AMhmULEBT/DBYjuJGHK3AA+oklaaqzM0xCBdRv6DC3DeIDOIAKemsiDxFXT9YgBAKKVOogldSnopuJx59J1cXXgc/C89Ugo1j3Jq12UwsxCjrZTqAvHbSJ36xcw5TcVlEwGH4gmJn70jtHyslUogANqUgF7HSVjRLGFWFhm23G0mJwJa7U2kTykRBUtrIQwGE6mILQbE3O8jF9mccxt1ve4lDmourxBAkA3DAqNSlkNzpYTF5segOaufci4mJv3JsBfZhoIMk7Mbxg3DOPhGBqJTZQCArU9SiTMAMsiSFYRckST2SqKN1bUoLANsNPNpsb+62x20EXmMWU/3CAm3umeU8zLSIjluREXJBibD3T8APU6PE2MxMdeovvcQAe3lN0KBEqGXof+YkEH+KZvY8ojcQ5RdTsIIAbeykjUoAMFRLb9I7ES6nMzkXzCo5Btt+EQxB9NIn+4IMxfcdJ2g9Y28z+XmcbXNKoF7byD90qoJ3gSsk7x02kj1lZJsLaYUj7UtqYmIhTEk3g+uNdN7dzM6XheG0FKVbE6YLQQRpJEGLQRDEHzjAqezKx0uDYEGSLgiT1B/vt5wzNLSdyQ2hqZDeH7yKWGltJMMQRBBPXB89SBQupV0aSr0xdYtemYKmwkfhiwqEH4GZGpj6xPxbyLdbdPng+QrspOkiTaCoYEH1xJWrBw1TTVp2EmJ6C1p8r7+WNW4WmY07mOuwLSpMgbHv2W8/A3xmJPrJvNo3HraMYqrp+8dEC8WEkkaSNpMyO98fZ06gaiqdPKJ2gwFJjrJQ3+eF3XnFdvM5/HujGFxrWdumM95oIM0h7YLSibwP5DqY6nASdhODqoAkXEi43A2MgjY+v9OLQWvK2cSFSnTSx5y4+3MkEt2AJA9PM4XTOAq6RYcysB9ogDygQvad8J0yQQwIABixBA1CGsTabn44JQz8OCrBRGy22E3JBm4H9MY3QnnMqllFhN5LKVGGt6hVV2Ji0AlZ7ntuRv0wLPUi4BMCTOkXI6XOxaAZPlj0l68ayJVQWLGAAW6Btpldo+WHqyU0hCASGXUQNugCzcgCTBg+uo4A8pzzHOYjlBq0oukCQWMk+GACzNG1lB+IwfPZdqxBg0qCDTSQkkmDBY93NyT027YM2eNFlZaa6RqT1S3U3ktJNgCSd98fVs6/vLTQFgGMgnuTY26eeCCScQ8cyRV4X0mT5bDy9fXyxQymazFJtNDM1lCKWCpVqQAItp90CJ3sIvhujni1IMKKE7EgsCbGOUHyN9rfJTgpVC73aoASABaTyggwbgtPTbcWwHUlTuEZWGLGXeH8czDOgbMgCG1E06JZhsCSUm7QRPSDc2wrxKrmK9Jm8euw16PBMqhA700gQ3MSIsI3m22ymqiWNVXeoVbSBOmNOoGCBbUJ9D8fs80hqdNmPMoMxdQjCoZWLHltJiDHUnKKdNTcAA/KV3seyYPhuVVarFVvARR1udh3vHyx3eqktNENCtW0oQCaa0oi4kG5PQmOnXr+fOSyapJMQ14Ym8H49++DH2pz9MArXdjYKrBHtsJLKST5m+O/5Si1enTRCMXOTbP0k9LZKru182GPSH9pa5WujrRFFbDQpne5JcgSdugFh8el4Bn8uFC1WIYzA0O3T+ERedvLHG5vP1MzpXNVXhbghR4YaLEpTA8rwxjFbhXtTRy66XpNXcyV0kgHSLm66oPkOhxGrTNXQmgwuwIIAP0wTKD+nqhVXAIIP+oz/wDUzjOlEy1IFEdBUqSCGZdUII+ysqxjrC+YxwmUzjUnDKb3HwMhlOxgzFoN7EYo8ZzT5iq1eqVLMwEArpUCAAJbYL5ze+95VSnt5/nebf317YvotMtCiE77+cerULPunTZ/M06+molMISoJAVFUsqqpKg+IVGueWPdG/wB2bmQpZiWI+xLE35Wk+4Ay3IPKCDBJXVGFeDcS8FoqAtSJkje9pZQbaotJ7zjof2O375GC0qjTSqCpZADplyvKrksFjUYJIOGZAsolTcLdyMwjUCQSpcyra1MqpeHJudQB723xqjVKk6XKiNJg6rWFwDzcyrE7wvSBg+ZyqqGOqmCDp5CCfdVWEtBYgPJMkOQTAu2BZyxfYKRNyvK067gFjUUkqetomdMjhnEfIzMoQrAGSJsVLWuKW25HMRPcmx6/NBvNhzA2t7pmb8x+1c2ZZ92MZZNIghrSYIj3UFugAbxGnqSRF2nGfBCkctrCYIJUfVudhHM4uSNu4jB4gb0mkaRJJGlWYgkbzpkGTq9wACwsL9ys5A66l6ktMyI32bVJhfuMDsWwBX5RAGpwkcxUwpYvuNIJcMAV7kdcEGZ6CCJSCrmVWVOkHTy9IJH2epF6K0iwlRGhdSsJXxKQgrs7SZioxaVZYkERq3jUGODFRQqBtNI+KG+sMKEKaAJNk5juf4R5Yn5/xKbFCYCnlh9a6T7plpK8gUA/dAwo5YKChMXVwHEmbE6RcdpM9L40ldyATKWuxJlfMezztPIQwIBAuL7domD16YRq0RTKj3WAYNGx9Q4t0kRcEfAacRdRUVDqViZAkGG3JE31SNu3zdGfSqhV2k2RXsx5YiVJva2qfI6oEOpcDJkmUdTFFdZ0rSJcDlMyCYJIYG4HUbDyvOERxAsIsoN4UACfSPwwzn+J6ESijDSRUV2CFSdRGnmI1WEjStoA3nEaqxJkf2BYdB069cUVvWT2XuTAFvLHyycYkdMe0/WMS3R7QrqI6T69MGpACZnpcA8tto6b2uNsCLiJG/Y7kn8usfjgtMESQQ3rM23gkWPzwpa861hPVksFN9W3fuD5fHphjh6aA0xqkoAVYzIOqABvsOgvhJqc7NeftWnoe/f5YdyWWBVSWAJaBALMAN9xYWsCb3wrEBZ1rwmWUGAovN2AMEzb0YeffDAdEGkECF3XmCoWDagbGzTa0+e2MUMryE1FuNYEqwIEC7DaBzR5m+wwGrHh1G0AqbxMaRC9TaZCi3mBaSM7G7Wl0wJnOVtWkSSoWKaj3j/4za+5nDOUAdSz6fcYKu+wAAieU2PMex3vgXDlNO2kc0wQ4sQJBiDMAm/S++CUxSXs7XUsDYuZiF+0bAathIuYGOLWwI224zEcyYeUBIHXeeseQw9wTKialR3Ip0/DZ0AkVBqI0mGUiRq/G4tI6+V0OQ0AqSDoYGDF+ZTBi98fIQtMmSQZEb9QbnqLTB6jFWbcuDEttl7hGZFesJMUyQiKVuwPNWAEnSQsnVq6g7gDD2c4UCdQUKRYabBREABdoA6eWJWWqeE2WqqNQVabR94ETVHqSXE+eOlo8ZyrtpFdROwdXU/EldI+cY8HW1KquGpgkWPGe+56WmVNpDc4k6hw0a9TLPS0CBI6Rc+UjB+JcPpUqNSqpRyEGlTIlmYBZEAi5mLG0WxWarRVPENWmE+8HVgfQKTqNjYYgcV4ktRlDHlgtTy4nWd9LuwUorHeCTA2BmTkp1q1ZwTew/lpZ0poCFtcyW/GKdMkVMpqeVaFrQl0UjdC0bW8ziEvEGauz1Sq6lIMKwVQOZNIUyIZQRve5m5x01Xh5cl2Aljt22AA8gAAPTEnjHDBTSSOZwdA9DLN5KACPMmOhj19PUog2X3jjkmZKiPyeBEa6EQCCoIAuIm6ke+LCx3tOrYEnC4owbggTJ1Dqu4/iNzuRYdcNUc8xP1qamh5ckkuxBCawZDaZbzM49auTEhSBMCOk7Tv2AvsBjeN0zkrJ9ejYecd+0fDvHngmRzVWkwam5UiD3EhlcWNveVT6gYJUuSTvjIGKWvzEJl8RmKPiCmjNyiqzaEepVlQUp3OhYdZaFHWAZwjmqcDW1+f94SBUkqiVVKlSXUaot1+OE8rVam61UMOhDKbSCLjfFTKcRosyBl0sq0kR20wrEgVXYgC1yQdxM6pGJGmV44l0qi1mkugE1uqtTjZd7gVAIJjcoxHKDttIx86m5OiUUB/EA5pqFZU31ypuYHu94w1ms4peroKQzqqysAoDZylw03lQDFiPNOskLH2EY01ZgQ6NJqSVE3J1LN9vjjit+Y+8WxCRpUNLfWc2oalqVAKjBYuVMlVlhMGLG8v5B9AdWEACmppqSpDKPEDvKhm0mTFzKIpDCGxiqUZHp1UJK1UqCrRVJIICVQYJVRfUCOUst41ThjNtSRH0PUWu8mqSiqpBJMeGfcOzWkAMIMjARbkAxahsptJrEl5Q8zvICgXLHou0STEbWGNZkAuywFcE6lBIG2yhhq1DqsTa04m16syLR+H9MMvmlqUoNP60GQ4a5llgafIBh13FrTjZ8pixMBm5AQxE2WSLEiYkWkje9we2D0tRQld5MqYIJHUdVf84N7RhOvmCTMtMlp1TBJmx6frj6hmmQmZhhJvvc3Pc74Y3nCURX0sQ6yh2gixOx5okeuCVqA6geux9IOEKbayRJaYi07wYBsQwg+sHGqecYNzmVIgzuOgPrtjuYDJimT+uDADoR6/D02wuMP5LZvh/PELzjBMTAkeY9O/cDGFqMeUMTMAAj3gNvQTeMGb923qP9WM5L/t/mccO4b4nmXoO3KBfc33HT164q5LNwVCSGW6kWUPpCm0mSBMybn44Dk9/gfzwg/uL/f2nwlT0nLkys2cUKKYktG5gyDJcwLXbaRYKPXAUYmmdbkcyjUY21g95JWJ9AMJP+9X0X/TjPEPcT1b8hhSgEe8daqWbxAPq0azHfSBZdXUmBYd9t8OV6yilAaFbwwFjZoJnodIE9IHiCJtgVT93T9H/wCk2FOM7D/DT/6FDCdiOOIw1DlYagRp1agbbG3x7emFqLNAEEgnt1+z+OM0f3aep/7cP0/d/wAv64ZIrcSjkeKqqClVp6wnKpBCtp7EwQQDEdr72gyZ3KVZQ/UOJjUSVdT3qAcpBncARpvviG/7wehwofe+DYi+kptdhcH5/wAErSrNuCmdK1fLURKaazz5rTWN5YjU/kEF++0pJxRySygeKxlqzATawCJ7qCABeYEQFi8lOmKWS90/39rExRVF3cyrOb4lbL8RzMT43YXSlb0lLfDsPLCXFqLCm9V2ZnMKCxJJn3rm8BQR5SMHyOx/vpgPHPdT/APzbGelbxbKAJRspeQmzFpH541TqSMIPhvLf3+OPVmJoRqmBk9cbO+AvufhiixCYwHwNm6Y8PTGW3w9ohM1lc69JxUSAw7gEfI2OHTxbLuU10mH1ZDkET4sPdf4SShv1HbeZV2/vvhc4VlEojECdDlvaFFRQKUOSTU5j4bsTBPhiwDISjLsZBsRhXifFDUckTAsoJnSonQoY3YKDF7wMSMHfYf30XBVAJzMTzPGO+MRj0Y1T3w8nPhg1XmHi6AACFgA6bLc7zO2F22wejs/oP8AUMcTCOZvKIwcnVAW5YEafmLRfzidsMZnTexsTYxMdPwwzU95/wDG/wDpXAOJe5S//WP9T4AOYLz/2Q=="
              alt=""
            />
          </div>
          <div className="contenPro">
            <p className="title">Du lịch </p>
            <p className="view">
              <span>
                <Eye />
              </span>
              15050
            </p>
          </div>
        </div>
      </Product>
    </ProductFile>
  );
};

export default ProductProfile;
