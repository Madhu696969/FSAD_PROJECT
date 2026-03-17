import React, { useState } from 'react'
import ConsumerNavbar from '../../NavBar/ConsumerNavbar'
import "./AvailableDonations.css"
const AvailableDonations = () => {
    const [show, setShow] = useState(false);
    const li = [
        {
            id: 1,
            name: "Jacket",
            type: "Clothes",
            condition: "Good",
            img: "https://image-cdn.ubuy.com/tacvasen-men-s-winter-jacket-with-hood/400_400_100/6937e4a35fc18153bd081640.jpg"
        },
        {
            id: 2,
            name: "Rice Pack",
            type: "Food",
            condition: "Fresh",
            img: "https://5.imimg.com/data5/SELLER/Default/2022/8/GV/MW/WS/46819356/supreme-traditional-basmati-rice.jpg"
        },
        {
            id: 3,
            name: "Java Book",
            type: "Books",
            condition: "Like New",
            img: "https://m.media-amazon.com/images/I/51xiwRkS2oL.jpg"
        },
        {
            id: 4,
            name: "Blanket",
            type: "Household",
            condition: "Average",
            img: "data:image/webp;base64,UklGRnYhAABXRUJQVlA4IGohAABQewCdASr5AAkBPk0ijUSioiEVHEVoKATEtLdwulB8u8fMPEb44fkfA39D+5bt4IX4d57exH9i8Qj1//uN7bAN+n/3z0b5mv2nqAeY/e++vewN+lv+d7Sf/J49/3z1CvLz///uU/d3//+7p+0f//Ot8KDeRIzciRm5EjNyJGbkSM3IkZuQ7Y3Mn9FWUbYM3IkZuQ6xCeM6YOjn/2Fs60CoRwa4z7jY14voOolsC42VMf6SFhMEdB9b8Z0xIywBiWI6VmJHiXbE9AtkXe/irhdblnc5LIvPSkchRBBClka3XbMIkCkKeunJb8fpBCIahCbh+gzP7xbLfsbfxkVq7US8FVqbqO4b3+3jMX//KEK3Bfk3m31VyMe0Na169EqV5fb02w6BQMWmp0Kyph+BXiX51uDngzE2ZZxWjdvBc7QNr+TLKSar217Rc0OkdV9jnXQkl9bgf8qeJ7nk2j3XgKHVOn6uzwfCJ/WqbMed5xwUTb9iH8x2HkWcbeTfZWMaffv+RFfXlGoxLJr0XxU9LtjbDZ/ScqfGA/tlc3DldRqJUfHjb330q+yTvOSl91vzvKm/77eISEkODanaoyu4o15r+fKfSdSvig1T8wPkalKsr9FPQwPmepkhOZji4caqd2d1qzwwhW1ockIDPYCfieROSJx+scfR3SO17KlcA2P/+CYGkbHKrS4hoIxOgItChz5DJQspnLHZsiz6XJ1lZNc7K6ok4Gv1sTk3hK8302WYBiXi0wzsUlNnxAysAmw/7MFDx+9CGGH4kn6/ZpDv3i13+2VsPfVLm1v3uRHouZaQTP0aBqBzq7x5HmP1jcopUPrnT791IiCx5P75njubX8a9Xk/D8ziUjveZFo+vOQC0IDsfBH9pWqIVhgRuCHquojY/NyyvFdHh91IVJeRVLulHzvqmiZOTy0EkpZmQ/szFQxW1hnaKsfcHQwyhKdfCokiqHIKRpuuQKo0UNMpN3jOcJ9xXNq6EKrXg8baVscvo7pimmyK6ca9ITF0P4DibPuQZgb7nKRrruIy94LHFlQnj04TkVnQJ3hjkswtVXW7xoX8EV8Mr2k7VPvA6afcU62NBf2W8norT4JXWH3cfGqqTtBFMt0tdFVDK45/+t6JqHDpnOXio3N///bBllM/5lMGQJK1ndJdvJ3b13QBVr3tjwphCtMSaH2u8Tdrcbg4Fp76gtBgtBqoYB7yAQr79//Ut2dmODdDzU6DDJsZpsxSoTgjbGdeQxBZshXbbhX2Mvlv/+i//y5dibhciRm5EjO20iV+ieMcf7chii6ogkX4JIvwSRfgki/BJF+CSL8EkX4HoAAD+/8qGAAADvkISFXV54vOm68HXdohj0Q2qrSje+L8fH+G3yDc204QSKUNcZdyGx18g4QVRXWdSVcuw2diNXz98zwcekVW451ckoKh+mncU3IASHcDfVVPD9Ny+L15PxvEYznGf/NezKhTR27WZGotChNFfaz2qoBTkGHzGMlBRlpgvS2LqNI36VTsjjwyN420v9dfd94Ralsy8hui4nooRFqN/da6kYNfh3IFkoSsfyKDKgR/Ivzu1DqUKfNwn3/EadRvdBFLLA+EvYJy02d4H+TEwXeMDqNQ+foqNDMN7Flungi/aweb4n196Z3KjrN5Llfa4w60J/mDEUChxrFJDFBwzLIPUKzmpsV3MH1vrWWZGlYV8BVw0YTpad/jgJ7ezrybkBdULGy2kD2nPOoVBuwp4x3CuCyURP1y2yuDsqLwpJkdFDJ8CBzRaQehKmgOaZBFEs+Ow7wIDTHupkbPlXJ6/U63vFPlsxTPiZosCyzxqLF8K3emrghahx/8JT0v003597ahN6khgA3LsSPp+D+pyTrgx/u8qE7pEe/noVYBgkPpUJXUJXq2Uj1jH6q7LLc5NwC19GhdTjw0tS224HfsrNJwfU7/1Yn/Gs+WNrT2VQq/7vONSzSllmN/dhdfPqBccwlYez3+O/0KrvP302Do6uhqNSuGrjGHlSmBJkRPkjt+moV3oUuVyqOKKy8mghI1TSn1ZyNtC2Rl2ypWnhtNbe7RceC6pje5cMlPy93qgeFch8s8zQZHRCYzBfOTnXPedL+LEc0QuLe0LXRXrAZIBeEHYJg/Xp7AlL+1+i0oQW3ULpqiWdTNlifZcO50wWhubO8nKwk+ZKyvC2xnlCdYCEhCeTmqZOyuUfdTTvYMgVnNL2X/PrjGtvagFkWpXdbY9u1Uf2YrknzFKD+xvpE8Rduy+cBcWGmpge7XTspR25tZVWhT3kjDDBf3+b0SpQHnTf5nlKof+n3mHfNKFvFdAGEbvbmjRME8hUKi/qdNrfV8FORBxoqMTutprcPQhyx+b2/9Nhj7dky4q6LmAh8wIJ7tylhq+//z4l02MoFZNIOo1ITYJKY4sqHcZEV5TxKuClUWESTQdQQ36JdqVFUiKXKj1y3b3ilc+zeceRtdBFvHAG+cSNzSLYJ/XTb6i4w2RcJkhMsxvS3ULH2MgcxBP4364fHbzv5yfUmzvBzGgWfE5/YjUCa3Z9oM9ODTz7lvi+V3DXcjvizJJe2wC4XUp+XI9aSIGHvyUiff4NGCl/txhdzZ8gj+VxMEqs2H3f6oRIyl0gCdrN38pZ7J+wSpQbaPeFJnPqp9s09Z+PzY9iiieTT4ZGHhXoZP/z8iGv9dnebkUoPWqpHOII5ITE75UP1Iclb/fUpeWEUG1fE7u2jJoq0G/Oy5YB8fWw+LFYwCA6xNYkvH2TC8hHuVtartZmWDAcOxDCYU00Yz8HaVPTBaZgbyqw7nosN1ew69GFqbY+RJy2QonI4ZfUkwh2tt3LrXf/1hNl65Mju2+tCJSwIz3WcwqpjHy49fHCkXW2o9PiQRPUKYfYWydpawP0So+GAJH60BIYmoC6u4OS+H0xD4avm7vSn7olczUtDJKRg9sRhwoq9U1EBZardUXbWVn8pKUbOtLW2gCOuotsmlF/SHR93enul/8gdNXtcIo3OeKCQRAFaMYyf8Sgo+a1YtrmG0tkfhmY+gVr/VCX94xNGmufDCZ8seQPFIL8Rw8rQKZOOtnNQzHGAu5Sz82/bvGDldWFEAsihLTalwdomt3lnqkeY2kT/PKcwBnnGmupH+GudCHZV6Blj9embKgvM+H56etcqTTNy6mG2pjJvNMxhdg6vrD6oHNnZDHNocgARFlLpzCKgjQtuZRv6dv4Be9gwKBB+IDLpOkrvb0eEseJ+DF0e1otY348h3LcYTpi5V3aiN4f3hh32WnYI626hbD+7VJP8P7J3tVcUi49F4FgbOvQyIJSLXy13yqHJ5bUYMrJEOETvkt7ojogrte81m+vseXnpWzDiyxgOflAg1SUMEUQFJL+Jv80hq5hwiOVbyKIdc4HUOB01+GvUsYa6bMxxUd5HJZ238h9aCKI2tegnvd6chEBag0OfYgFRtvWO3CbFc28OQnvQkytKGh247VVsSW1wfFuLF5C1i0pKKy2I7HW8WLait/r1QE353TAAPvwCd6ZZETJNK9NcfZ5lhWM4Xypj+kdA3IvhohewRA4XsqO7ee3SoY96+DyqkMqOOrqnWdQHmzqAo1GwYBsnLBICP9Hs5Dreq25jrkbD+s3iDJuIXMl+zF+xZ2MZRsCgdoPe45DA+P2rorEBVlYgtC+8uVq9luKZkTiHk6BOdaGgLIBAf9TmSLmm78Jj5ksCqkA/HxkitHv41prKPRtMBUIJu9oHb7qIRyMa/CSQlK9CVLxfN4nvapTIQl0G7QniG5A9dz6GNsycghovgXpf4ZSqfWuPTU1uUJL2ZwDSs38mMr9obUb5MySyJ660Juayvm85wYV7QeUeecjBZin6Qo0z5bFspGkF2FS/C33dE9lbNZjeklnuEFarr+04xH8SXYEZBL/oIc4exZDskPXK9qYZp9kXj/Pc3aei5EOSrD9QP9ZZQFbxbPCOVlPRf8WKoLG3xgj+LWahj4ZNgS2HSF1Bm1EfmUjwi875vdQFAFPunwk9OkF6OwVBPQDnAcS05QYU413c5/x9SrZQiWG3b1T/0FumPewMuehL3RF5F+OFU9lGwIUHc66jJnS550GcnTTwK5/74ze9auYIaHPqdiAxXn5Ob+a5XBtI8a1e329mQI45pptgRImhkA46rKlEg+KoTUhMNSniliOjPTAtByi54oPTRaHgV373sFlxeyxdNGEFEVMYyJaNgH0vew9xQfeJ2PbeuGT3GlAU63TaG0oWGsoQr84QH30nTEGt4uUtPnTVJjK2xSQt5RAYPK2bIVws5ki2Hl9hvrYENkgtTXuEiGEHPZZbLcz7OzwjGIiUh30xEenax+oZ+1+SGXvoHzvO/28AXDwfEOfjrVm5QRQ+Typ2V5GhkjxQAj0OZhznxCVUStJsNhPDdaSSs1jigAmQdH+IY9eNlvEDu2ZoXm/Ac5Yu/AUUG/qXpoWBRPdu+bqxjTIQfjPDmFhCiik5UmE7YBqN2LfBTCSSKRDJWK+ydpPV9MXL95OfobjfDTb1/Li7TcV63mD0XJIk3uDawbmBKjuB0p3SlUj5aQii4XAcuObf3SSeQqrWEJYNQcHM8dDKovUbbEI07Ab7Z4sVrZcXlVokQbe/x7OPvn34P6ctSMiDcgPIsivIuvyUfYSMVhxQfBfoM2+qdCKcHa2y7ezP3CUrdE07Bw3IALqh3226TDzQ1bNr1CkOJsdogAmLI23VY2+pi0r0+2oN/wxwSDjIyh/WLRTB2eVU+OrWW/9LjcamOit/W9JWtT58YzjkOqCZCVdZX8F3xxj+EDCTg2vVyMxM5Lk1+vznxtzvQiBynohg5oRyhRnLWW46sEnKWu0HaSkcBaCsdt/7lo3COnTbOx32FTFAORLa0HYF4Os/lQetiSRCE5tEiUZnDlmjKsQy8SzQJ9qzR79fITuJTe+cOon44EA4iBZfksDhz9KLuZTBBHpwQNuXvirXCuS2hEltSuItLJS8k+Hz4QB7y6EHZN7QrKyjvu4B1uqutau2oRi2HBXN7eMMyLFIqC3YF0G1IB/p3BU3i9urQm3Eb1iwemnNDEVm8MA6HRsNZZYO+rf0ogqyHQiFHjRJU6dNMsxguHI19yp3hdbF+Nv3bt2elgetzNNXZUSzLUHNfkD1zUk/f9YqS7/4J4ofPrjLhO9oKz29EjSE+zZF1wWvTzmMIkzA/Inp9AYwgvKQn0/wpehRb9EeQewSy3q0yFBkKXJvRRh57gplsJCUxf9NrDkxRYRIH59QrIJio2vV7cvQ/Xbanr94aFRkPQUVtzVoOW8PLGn136BvN4vu5lXzl5k8nBaDIZAMtPxEFvKekK0+9I01VP+VCSPBPY5Gp/Wnt8sK2M5Ua6OwIKXZdwL9iMKdfPGEqWE1PZ8Z/5FWjKdFBU5eEzfqJXE8ZR9BJd8SmiiuqznsRgKOvkw5V6dqbVTKJaOB55LYnIC15HreDRE3Wvj7yC/nJO/Nxpt7rlNM5S0CngV6aFioQ2VZd68hgkWZkhHm1fmWXOe/ZfhCoF5VLzvyFkjTb5miqRLLE911BweVUCSCqq97MOwjszREM0KwBmhbtG12GCLn480KdxWBiipELsLzl9UO8PQQxsawzWqXND/xjekjcvTtWOyShVZDvQrz669O7iBMq/cS6+L1k2j3tYgV2tEMd0gOGrRb46G2AdxtfS0BsdQLJJa78+TPt9Gqy9WkA8QIrTTuL1mba8z4MpHBxc9cBtJBw5Q2jIT/IUh15tFHxKKqS39rQBbn5iWwPrTlv8S+o5QmlDlDa/lzb+Q2zcfj/IfRi0bJZkwwCu5Bk2cOUmognwoeCST3VPAkFdAPrExJUjBdHA2IpDTwlsoRTqQgks/Lik4BjFz1nAxkqsusQ1lARfpy9EaJbcV5xY3IJgyDmhGECLJzaRTb9swapsn3Nutqtzxlfk5tdwCM2sIJpgkgC1HnaWLCVk75uhJQEJswK97bl5E6yC8LcHeH4zUpdMeGAgS0ceYfovF2HnqfeX8+9owDvbNF7in2arOR5bGTiou8kpYfCLTveyaAHmx/gzb+lzDn7HRmajY7Idnb8a1fY0dOzyFYpijNX9toJyJyDCJlRDhkVWBt6h6qSnv6VE3vzsnSsYMqgmvpZRpGcf3ksUjCk9JPDFit5fHHkFWUlk3GuR/xYRpp+tDGvyHrisF2AIpXsUM0k0TzEMBLpDHkfwfszfn8FAjGi7mBBgMZHRWQZ+ioE+nFV33Ol8EvQwVbJCJidSOYsmgyEQsa4//CJOCW8MVkmWk2mtBt6SZOlxWxPQS38qZ0x7hmgf/IHHSFYTCy1i/TgKbHOo25/MsS0WUxsMBGj0/kFKOpo8+eTinbNGithR8xrVXqVkiNsB7XgXct6J7bKgKId6LY2qvd9VY1F2oBu1H5kD6pcV70i7hHIc4BmUVf8JNbea6cgbWUKjoDekPyONrJjnrOOMmwPxey0ucaQbdXlhCEvKDFD9ljKLwR+44Q7zmsj749J87w2RIbXVV1W9cqalVcdNqTGldaKlYnUNh8Qs8mx2CJ1M9a3xFsYTTrnr2T57Vyxen/togaYjhbHj61Z1hni5/Z4GNZNlhPqCq4G0AmIB9kLrZeEF17b6mDkw6cm96GW1Z1EkkNjFNDufQPY4P4X8kKEJYgcl0bLJFdVAwj9YzoY50wT/EbN3RdZvfS/LFelkaG8wGch+NaEwEKjVXdfXTsrqo4VTNgYH/53Ug1KzgsFA0sYaBuptRj2Azg8w/MyJSAZ3H0tHWVf0bWQQlyOJlmfrE3nPbGxLt5+/FuydN9Q+R8qGnr+q9DpNCGHGIcTLam15ZJ/1lRLfGLSMhwTeGl9kJiXoAe+j0vh76hYRNaCVZ+5xal8WmSVeVtnv9NnVtlBmHvt0KtKrBOPcGklqt3tvDxTZ+PuOr76oJeW7amAxf+Tsfyp6ehihjaXt/RWoF0n4Badg3I2nKuxdMgBivuPasQvqqDJ/n8oXHjDSZoG2wwGmCFbRq+j2ORKH4Xntt2H9lywOBBZ1YGrATfeO/Dt97BAvgKGB43AjhAyrJFdFTblmQjDVFVUdvQZPb2+gOI/ZiEvE4nqItx+dZ+ZISWgQpSOwRf2UbSNM9HbubLjkN41rUFtYOt2n5c+809Q18ZyAnThhzJeK7Qt/1gA63PgkhAVzVjBYbCb4RCwS2j7X4/v52/0rbe1i1uiPeDyitO9QfeLw++9XObhMrgRct0thq9KbtwLsIl6Z2RjI7KSd1CYACyjEGL5dhzS31oVV/SwhP3KPly1Ay8ofPnHVLk2dSJZ88JA+uPO/cfuGJ/bDogGPhAgVs0vWKKoUfGBq0cSlxYTYM0qLD9Ry1aUWBW4AziFRzTZ9R58ZKLCoBOoeQBFrxO/23swOWqBwOV3GuOsUToHIlCk5EObpxhXQtmNRSYzhQEkyEKgGmnSSM+z31Cbw9cLVCmdXJDc69i9r/CA4aM/RVW6tcBVAG5noIoxwqp5DZ/9ZtlTuc3nBTZ/R7RcRDpy4xQFf8saRoYE6Ja0rVnDg8MqOMyUaaBP8d5k6LvQ2vPMWi96R5mXVlQsGnmk+oRdgFb9sztUWBvYh7hNZNS6T7c8u1FJeBr8OpnDHswhz86hRHALmSHQdB3MWishfKrKL5l/rUTDRFCR9jp5mju6OrMkXXFssg8X4CV8OtKSt0oZzt8fYZIHtUh+QGUYMSTWbgJRddMAi2M8S9MpK6EMVhX5AEpF08WQOkVAtw5Yb3mcGM6Dy7KzOtwJfU/PPzila02SfBc9adWXvpd96FSoqjsLQiGxWYKnPmiWY0j7ZrWyKuA586XJAnJkFYG+EGm6mSZhlj27j3cEi6ubnL+DVv2VY3JL8isxi4mh5njxmMgsQ0UytuGraJ311EQEvwLBUk71xWJO4FzM3roI7S2+CKcfqgKo54eDAPxVSAy5tX7zg3KoVhyAy24HIggOUjCo/bIOlh13fWNxKMtTSNOaiWtRoL/zIXYNSng8sH/62ix5WepQS6MttWOID0upzqnY+hBAQtqnLdSaatvMYjxAMoYlf3GvDRnT7zP3NSYC2QNPcjbtdbsGv1r4CtN0j6ub3nAo54Hp9nx76UjgW063GXN02yiOkFy14oY4XxYTkd6LKLdPekYcyRKsICTVdZxtLnTIC7ld+h9sJPPTorwfOr00Ah+57K3+sS2QHQ8mSCEc0SlEE2xV2I4ALKNHTzEwJdGwSbu0TzwWi+4dYRnHXaZJq5cjpkvOkAdPkuBxjCGozUMGOMvYjzIJhvPY4v6yWW27vmDBLxIFiS6QT2wDx/pB6OUgDWpnysBVazzrwDLykipVHqg/xRJMC56mwRF00mT1cG7jgPH3zrnTZO07nPtLhF2Ex00ED0rX8zOkkNUoN6j6yeH/Hiq3b+/DiEVB4wgbXhacjbBGgf+OsyukeKrfgYrnPS8QmZCnM8tP9tEw4KdeBlXCSqm4e9tNPt8CdCe2FqvjoNPjsKq1x4i6FrD9zSOBakhaV3r4npMzywIIdNVOGxj2ewIkNRdFnHF5ZXvUgfDSg17TO8Pci8mmaOJ/8PK0p3f9seK/UoKhBOLfrE3+/JUDrRkd5qsFg8pjshbsCWZfAwbAgT+RnvrGE2yXtPB6VJX+bENtIJmKTPPKrPXVh7bzmxKdOWEz2IRjGhCkoGuIlRSFDY1K01B9NofuyS5k18Oklqv3Y2LBuhyS++UEjBV996sKHDC7Pph/UmX4Dq+Cdy3e/ncdQ6CwLgW6pCECKaJhkWXciaLnzVHbo5YFg88hbfoTm57Y81qmhZpzHMtkWPdrUoOodWzKmi8qWQkcvjPDivncSHesu4Mu0o7elFwMmPDQ5gCyD9L4nz4ziYhl+hiWFTJaQt3WRNoag1sDP2fOaboljcVISxJKfcKdT1GtAkz53bMAY6jk7omIp4+Jm4cvkhuY/2LxVXUjXQrwgWFh2nHcbH7B28nAwSMiKXUF2oSHP7JDq4fWs1xjEvOshLtj8BVC41cJAYZCBynfeGuiSqcetChM4aRoVhxr5H0jsxh7IDT6Ei7n4gQ7JkAyFOdW/LCekcQCqRqXO5AqG5+pF3Tn5lL5wp2f/gTHHpb1+rOkpWvrF6rQqHAimP7hKNl5dNFjcZmtJFJiWs8VEZDf0HiTnrM/EH9+UI7uVW1eI47/mXjeX7G587qh0dymD5kt7krcFkz1rPZrAWdkz3U5WbuH2yJFn7dnABjUvVyFjGHpoJSIVivMDVuV66zYHyBpED2W75XWDVgh8/OXiqivi6gRPTL6RV4SuGxmvt/2EixlcttWd5XrmvZR1VrhiqiqYXhp1XkCGgIKIQldOiOVNIMvlsggRgajNOakVG+/a6lu4IeOBvn3pf+SQNVoxBKOU6h955ZhmVqcwhog4AKW4VHc9us+xfPns0sV47Mo3R/OPcD9aI3vmYZttMCF0BVbF6Nz+phq058gCGN1XsPR3I6gyhUGCnPstvCPcQIw7ZnObS3NjWymI2LK1TW1Xmdl8KcOtryTmKBYrmwkNG+QbR9S5knaZLT6ayWiD7foRiF24KrFpd//Pn6pxLhZ4XUYDYpbDUvpa5hnBeRtP8At4hXXmfwv1tnJWZ4sZtyWaOA6ZqfFz/yyO60UfwTjF+uKBu5HduSdsspTP5U8zYHBkVtCHSaIkQyBbuZ4vMUns6CiWMbO9vrsIBLxJIayZ74ZPAxULfUcrQnEpssgLDDT2+lwgq2l0CY4PfI1omF93AsM5sQKdd3ON+aKOPTMYde/Vrcd9GcpCZZypjDPnOzYu9RKpmrV/34uo9thBDY0vrZE/AU2rIrxiwV0ximNWJ0W3jmuA4J7rBFn/OXszMipyJLoZLoDVPaGb0TOP21qsuw2BBMzqpnZs/aOI/4sbgbLzKqqwGU9UDKpTAgfdtFottn1Zcr1dvD5p8oe97Y3p11420IkdJl526azE88nczjxv1kXPT150GED0WHGyVvIW4Avs0fHuib6USSjiVMFHG/Ka7xHlIxbo7T33cioE5SsuGQZ2WiGLHAFdaTSF7OxtoI3dVj2mhkhL+csKmoY6W8KHNJ9SjYdM5ugqqLeRhL4vscdFOdT+lCZlEGgZ4vFJ5I9RTvKSwhawx8tAx6XvbmdF2wv2Q3e26fid/1k+nlOmn1miFLDqN04J0HtJFOaoWjcnBKmnYaMI96yyxg9H22M1X15Pzlc2RIa2GZxQX8JcLWSNlqYr9TmwgVTLP1MB6iuP+R5XT71CqOLa4mLMtJAd3XTpEwV1Ey2BTQTXWxHYckB5IP2SJFJRqbyYdFMoqQayROyMTk4xk+qEmo4f90I6LEwuXhnA07kq8LUalgMAY6eB+FbhaETOWBvurOI/hpH3tYYA/R1UXcp36pm5yh2ercYmlXB1R/29LCUskJBfd3us06LLxL04ui6TbQ6f8kvZta3slix+DpCBcPHB7IcDw4ZNQzhTR3BlNaatSmWW0SMzp/NDL7I5ngIEnvBZ2ty7Rj8zrJ0eAD7S8jcDTKALfZrpZIR6Vq4Pr+Yy+25xpQM9CUbMFkdmdxfJtpjRnTfXNp2gOXBP82Muwq7hgYVMCXx+H9BFWcDmaOmW4dpxUikbHZYD2Y305iVja8NnIQIFvTYwWCWVYpQNQ4bUld78q5/yzpTqLEKoGJXbXgdc/Z1Ud8VO5vfYLvwbXhJPS38+zNpVXiaH2dcePyYNRepEf4KyM4P8Z92eEAWmmZxM4Pk95N4GM5t4ATJdMQGsTa1nrhFpJTX5cCqH1EdOAq2JMGzkBJJFOzPrmSV+nMLz9wDyWc1/SWRPe2iFFhikuTqMJ1xt1TzddZ9BoLC8kYxsu2t+OH96+jW4qFSIt4RXx79zEyRlAHxyHJryVzLpkh+eFQP9x9RcXV32ORfLFONQGy5ceUFErhYlBFOgr+vlMinVNnwHfJxvfKFUwrL2HZ7K+rEIGOE0dhN2fx1o0kQsJsVflQmvKMyO6E2EBmUVLM0oE+lbuYdzKZr4kUSUS7zorGAWFm01AAxh7/HrhNcO7BBJH3mDEI7gbm8X9WhrekQ8SaB5r2HjL8RWd324seqW6mBpjN9Z6x7nP8IAIrWJuhoLhIhmeIZs3RANNWQ6t7UYPtMEqwCRwXTpOrh9Ei8TZe0IflhA5VHYnhZnex8Iu+i33m8M3QYdNhDD5qq+qk+lA+ksN/FVsn21pCY39oQ2NIEmjlAKKAKvt02zhMEOkEhDRsEzTIRIik6wIEq7rWrunGOcrG1gLnl00IN12WmaeFmcM4hSDwffSlaR1EJLr7Y1CWOFY8gxf+RDy+Vhb7q3FNQxnm7fzc96m4qBTakWhYQGVoZzRdaDjeXi/sMFo0Vfmgv7ru2M34YAACBQ7TegAAIGhFVDK/+ZmA0RPj9cwhsB/mAeniQAe6o5gEV4AAAAAAAA"
        },
        {
            id: 5,
            name: "Python Book",
            type: "Books",
            condition: "new",
            img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5YuiWBRJTM-rvrrgAyr6NlEEzoBrsny8Ddt6ZRWoHJUnToq79rat3M4Pa9OlfuZrwnXmLVj4wZnIpmNmaSg1BAu5HmxiABaDLYhtR7JbgfLp_nzlpNXLrJw&usqp=CAc"
        },
        {
            id: 6,
            name: "T-Shirt",
            type: "Clothes",
            condition: "Good",
            img: "https://image.uniqlo.com/UQ/ST3/in/imagesother/2026/Feature_Pages/Celeb/movie/L1_Poster_sp_Jasprit.jpg"
        },
    ]
    const handleRequest = (item) => {
        let requests = JSON.parse(localStorage.getItem("requests")) || [];
        const alreadyRequested = requests.find((req) => req.id === item.id);
        if (alreadyRequested) {
            alert("Already Requested");
            return;
        }
        const newRequest = {
            ...item,
            status: "Pending"
        };
        requests.push(newRequest);
        localStorage.setItem("requests", JSON.stringify(requests));
        alert("Request Sent Successfully");
    }
    return (
        <div>
            <ConsumerNavbar />
            <div className="donations-container">
                <h1>Available Donations</h1>
                <div className="abt" style={{ marginTop: "40px", fontSize: "30px" }}>
                    Discover items donated by others and available for request. Each card provides clear information about the item, allowing you to quickly choose and request what you need in a simple and efficient way.
                </div>
                <div className="donations-grid">
                    {li.map((item) => (
                        <div key={item.id} className="card">
                            <img src={item.img} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p><b>Type:</b> {item.type}</p>
                            <p><b>Condition:</b> {item.condition}</p>
                            <button onClick={() => handleRequest(item)}>Request</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AvailableDonations