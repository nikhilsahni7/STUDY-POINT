// components/HeroCards.js
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Check, Linkedin } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-8 relative w-full lg:w-[700px] h-auto lg:h-[500px]">
      {/* Testimonial */}
      <Card className="w-full lg:w-[340px] lg:absolute top-[20px] left-0 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEBUQERAVFhUWFRUWFRgWFxUVFRUXFhUYGBYVFhYYHSggGBolHRcXITEhJSkrLi4uGCAzODMsNygtLisBCgoKDg0OGxAQGy0lICYuKy4vLSstLS0tLS0tLS0tLTItLS0rLSstKy0tLS0tLS0tLTctLS0tKy4tLS8tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABDEAABAwIDBQUECAQFAwUAAAABAAIDBBESITEFBkFRYRMicYGRMkKhsQcUUmJywdHwI4KS4RUzNFOiFsLxJUNzstL/xAAaAQACAwEBAAAAAAAAAAAAAAAABAECAwUG/8QAMBEAAgIBAwIDBgUFAAAAAAAAAAECAxEEEjEhQQUiMhNRYZGh8CMzQnGBFDRDYoL/2gAMAwEAAhEDEQA/APLEIQniQQhCABCciZc2Tv1fqpUWwwRkKT9XHNH1cc1Oxk4IyFI+rDmj6sOaNjDBHQnzTjmudh1RsYYGEJ7seq52XVRtZA0uhOdkjs0bWA0UJ3s0dn1RtYDSE72aOzRtAbCE5gRgUbQG0JzCkEIxgDiEIQAIQhAAhCEACEIQAIQhAD1Nr5KSo1LqfBSVrDgsgQhBVyQK4lMYSbAEnkNckkKABcK6VN2Xsieodhgic+2ROjG/iech4aqHJLkG0N7GgZJURRSGzXvDCeWPuh3kSD5Lm0tlSQOLJQAQ4t11txA5K9qtx6qNhe90Yta2FzifXCACndsbXjqWtjronQzt0mAGF+gJcOAOuVxfiNEu7lu8ryiuyTeUY8rl1ezbvHVsoPK4t8QSqup2fIz2mm3MZhaqSZZ1yXJGCVGzEbDU6dTy8VxjiDcHMZhSqqmGFszB3HZEfYcMi3w5eKkwnPb0IpXFZVMQki7Ye23KT73J/jpf+yrWnPS/TmgrXZvQuKB7vZY53gCfkuy0725uY5v4gW38L6pxu0JR7Mr28g1zmgDkADkEzNM55xPc5x5uJcfUoNRspD0tJeoYIQhCFQkEIQgAXF1CABCEIAEIQgB6l1PgpKjUup8FJWsOCyBcXUK5INcQQQSCDcEZEEaEHgVrNj1FHVENqoQ2X7cZLO06uaCBi5/JZFaDYG6s1QC7ONtgWOcDZxvlbjbqLrC9pRznBSaj+o18O7WzWkExSPtwLngefeF1aO2nhaGQsZGxuTWtAsB4afBZCGulppPq9YMJA7rzmCNAb8W5e168VavlXLak+Xk2rojzyWdTXMcAZXd7hx9G8PkqDbDGT917bgacx1BGhTG0Yi9paCQdQeqg7PrsQwP9ofH+62rrx1QzGKQukpTE3DjLhwFtE6TlddkJsba2yVbDVjtLe6+x8CR+qYRY5XbLY/vNFnfA+P6pjZzO5JA/Qg26OGY88vkpX1nDiaT7Lh/ST+V03VEYjzAv5c/h8lrGQvdp42LBF3ffhnwPF2uBuODiw3I8CLjzVdtKnEcz4wbhriAeY4H0ViLNmid98j1bYqHtofx3HnhP/ED8lZc5OY/w9S4e9Z+RBXWgk2AuTkBzK4uFWGSdtGibE1oMzXSm+NjO82McAZL2c7mBcDmq9y6Ulyq+AQlCEKpIIQhAAhCEACEIQAIQhAD1NqfBSVGptfJSVrDgsgUjZ9E6Z4jZhxHQOIbc8hfU9FHS4oHu9hjnW+yCbeil8A+DebR+j0ujElO4NkwgujcTgxWzwPOY45G/iFWf9VV1H/CqI8NsgZYyP6ZG913j3lrd0a+obABVOa7ugtdn2jQRe0txYnrrzuou8u2mlpBDntINxhLmW63BFlx5WylLbLqjKqE84n1MbtjbbaoXcbu53BI6C2g8lX7P20+A9m+7mcOberf0UXaUtK43ZFg/BcD0OXoAq2S3B1/EWKZUVgcy0egwVLZG42OBB/djyKpdqxYZMQyvn58VnKKufE7Ew25jUHxCupdqNma24wuB8j4FXgsM0U8ljTV+Jtne0B69Qqou/skpIeCSAdNVoi2R2eTE4u5p3trvueOR81HXL2zUhkXUm/ZHkXE+TbfNKr6fFO1tssI/pBJ+SjwS4mhx/eamVFZePCBeQjAOefJSmI62vy748opQ02v4fH/wU7BAHHvPawcS7EfRrQXH0VnW07IYTHfE95aT0w/lr6qoKuL02+0Ta4JNZTRNaCycSEm1gx7bdTisoLkspDlD4NxKEIVQBCEIAEIQgAQhCABCEIAeptfJSVGptVJWsOCyOXVpRVcTLONOC4cQ+Ro8bYjcqvhjvnwVls/ZUk1y0tZG325ZHCOJni46n7oueirZjHUUvuedsTYUteZYcRfbm3FkBwVVWyMAsxrifu3a3109FqNzG0GB9LCTM7CDLM4YA45i0QIuAP2SsfvLRCmmeDMS29wC8ktHIgG/quXHG9pDumfk6lNNGb94Z9VHNMz7A9EMrmudZoJ4k2AH6qTUwuY4R4SZTlgGbmk+6R9q2o4cc72byhnkiSQxjItF+QASJAwDDYBSKjYtUxpe8MjH3ngn/jdRIaTiTi+SmLT4JcXHlHGk+64kfLzUWWUtfiHmOCmzSW7o/fQK3o91mujDpnODybkC2Q4A3GqiU1Hk1qona8RRTTVYDA4anQfNdqZgYi4cRb1yWnZutT97uuNxYXce51b18brO1WzjGHQnMjjz4g/JRC1TeEa3aSyqOZCYRZoHIAfBd+uiNwcD3hoBYnPLyVSJnAWuVyJlyFpkSm1teS3kl7QXLbHmTcqI9hGqkMKWQCLFbHIV+2XwIBSXJyRhBsU25QxtPKyhKEIVSQQhCABCEIAEIQgAXVxdQAuLVONaXODR5+CZYVPoY7DFz08FZMzts2RySQABbkoz9bp2RyYc5Sc5depb7tbUMUpDSWl4tcdL5K22vQNdTPmtc2cQBckni5x5DX088e15BDhqCCPJaatrXywRUkPtTysH8pIwA9MRxH/40jqYtSUkdfQvMXEi7Jo/q9Oat1g4nDDfjJxk8GC5HWy1m5mwWRU7q6pyLmueMXuRDvXN/edqfIcCl7wbmySvAdPHT0lPE2OMu77iA0F8jm3aG3OVy73VmdpvNNEOw2wKtmNgMB72neBIL3dwYeg0Cxk1NYTHsuL6De1J31MxyLGDvd73GcC4cXEEWHW3NQRE6WQQU8bnH3WjNx5ucdPEnIaKbS07pThE7ZJn3e8FsjHOPIY2gEAZDPhovUd3tlxwQMa2JrHFrTJbMudbMlxzOavK+MI4Rs65PrIzm7m4bIrS1LscvANNmR+B1c7rl05nRDYsA9z4u/VWRWF25vBtAyyMghZDGxxHazEZge8L6A66FJuUrH1ZvCUoLEfoatmy4RpGPPP5rC797KwObM1vd9l3S/s+WoVLWzGQ2n28MR4RiV0Y6XYWtWi3d3fLWOvXmpp5WFpaQS0G+TmOxuwkfvprD8J7sh7Sc8xa+p5rWR2eeua5TjNWG3qN0Uhjdq1xbfmNWnzFj5qHAF0YdXk5Wq8kWmSAltKbCU1MHEYqojuL8Qq8q0BVfOyzj8FVjGmn+ljSEIVRsEIQgAQhCABCEIAEIQgBTG3IHPJW9rADkq2hbd46ZqyeVaIjqpZkojDymSnXpoqTKIhxWr3AwmspS4jIzFtyMyGFrbc83H0V79GWzImU020pYRI9j+ziBAIbZrS5wB9447X4AZalV+0JhNtinkezC2RwuBwJs245WIab9UlfapPYjueHaWWx2vjg1u9uyZq2ogoWvMcLmOmleBcnA4ANA0JzBF8uPJY7efcaKne7C4WMgjibI8l8pYxrpXWAtYE24fr7U9uFoeLYmaXyBB9ppPAG2vAgHgsVvJsZ1RWMka0ljSSCS7BGXtaHmzGHFk0ZYrXF7Zm9NO5JJQaXvyK6xzlxn+Ci2Fu06nqTHG49hNC6Vl7uML2Pax7RfniBB8L6LeiKzQRoMvROMpW9xjLnA0txG9zc3cT0uFZCAYMHC37KVvxK2Uo8HRrtlGmMZclG8rCbzUD6utptmscWMmLnyvA91gLsI65epat5O2xI8kqiijD2SOb3mHE1wGYNrHyIJBWEXiWRqT/DeDDf9C08WKHvjvHPG+5Huk4XDobC3JN0ew5Nm7QdBcupqht2HXBK25DXGwFyGvsbDEAOIW/rKNrpjI2UBj7Y2lri4W+wbZXHNI2lCyWRsjs8GMtB0DnADF4gXaOjnc0ppLL8zVzyuxydBG9Wtz4z0PI/pFiHascNS0g/yuFvPvH0CyzInBuItNicjY4T4HQrYb7Q9pUxxjK5eL8gLEn4Fabdx4kYaKTvQmPCGngG2Fr/AL0Xaqv9nGOTsazw+WoUpR6JHlgXQuyxFjnMJuWuc0nmWki/wXAukup5GSw8DrSma1uQPknGrlUO56IYVvE0QEIQqHSBCEIAEIQgAQhCABCEIAlbO9s+CmvKhbP9o+H5hSnKy4OfqF+IIcmnJxwSHKSiPSvo62k3/C6uA5uY/GB92RrW38i0qiqLvrGAZdk3ETzJFmW8y4+SzmydpPp5RKzPItc06PYfaaen5gLT7Lro53vexhYQACCQTbO2Y1Gq52orlGTkj1Xg11c6/YyeHnP7nsuy6rtYWSfaaD58fipRWW3ErbxvgOrDib+F1/8AuDvValKC+or9nY4ghdCpNs0FVJIDDO1rMrsLfU31KCkIqTw3gKsgvcRzTYVbBRVDJiX1GJuhYWttl9mwBHmSrILFj7ioro8gkTSBrS46AJapd5KizMAOuvghF6K980jEbev20cvMyN83NJb8QVZ7FqWscZ3GzGRucT0IyUeeoZgL8Ywi9yCCMsjpx6LGzbTkdEIL9wG+QsXcsR4gcAnKqZWY+A5rtbXpa3HOXLgjzyl73POrnOcf5iSkhJCUF1uDwknl5HGrlT7B8vmhqTUnuHyUvgiHqRBQhCzOkCEIQAIQhAAhCEACEIQA/ROs8dbhTnqsjdYg8irGRWXAlqF5kxLimylWSSpMUJKXBUOYSWOLSQRca2OqSuiPqjGS6scHlPBpfo9299WrGY3dyQ4XXOQvofWy97BvovmaWlGEHivQNwvpAEWGlrXd3SOU54fuydPvcOPNJ6nTv1RH9Jqlctj5X1PU62pEUbpXBxDRc4QXOt0aMyspV7zVDxeClma3g4sbiI6Bxy8wtfHI1zQ5pBBFwQbgjmCqjbOynvF4pnR8wND4ckgdTTSrUsTXzMgdtVbbvfTzkakubF+TgVf7Mre1jD8Dm8LOBB8RfUdVBi2MSQZpXSAZhpJw36hXDQsZY7HQvlW1iKWfgDnWF15rvxtkgljT3nj+lml/E5/FXe+O98cIMMREkuhAPdZ+Mjj90Z+C817R0jzJI7E5xuSfkOQ6J3SaZye6XBzNVr46etxj6n9CM1xw4b9297cL6XsuWUiWAahMLq4wedVrn1bBKXAlAIAU1NVhyA6p0KLVPubclD4L0rM0MIQhUHwQhCABCEIAEIQoAEIQpAFOpn3b1GX6KCnIJLG/kVKZlbDdEmuTZSyklXEUIJXQ+2fFcKSUE4HH1BIzUeZxsVO2fsqac4YYnP6gd0eLjkFP2zu2aaP+NIDKW3axgJAFwO871ysjOSsba65rr1L7d7b1TQhroiZYCA50TjpcXuw+6c/DmOK9L2XvbS1cJMUgD7Zxvs2Rp/DxHUXCwey6Jr9m0lRb2ouzd+KFxjv54LpqHdVlQTZmYzJvZcSbw2me7emo1FcbovBvqurjiYZJZGsaNS4gD46nosDtve2WpJipMUcOjpT3Xv6M4tHx8F07kYHXc1tuDjd3oOCadRAG19MvRZxSGNNpK29zlkxO0Yw2UhvCw+AJ+JTcU1irUbNM1ROxrmNs+93mw0sBlnzUas2DUxjE+B+H7QaXM8bjTzXcqXkR4XX3Vy1U4t930IxluOvzSE21LC0MFFLg6EsJISmhQB17rC6gE8U7USXNhoEyqsbor2xywQhCqbghCEACEIQAIQhAAhCEACELilASaeT3T5fonnKAvTvox3TEzRW1LbsB/hNOjyDYyOHFoOQHEg9LzkS1MVDzFduvuDPUtE0x7GE5gn23jm1p0HU+hWiOxaKnvgZEQP8A3JCJCevfu0eQV/vVtcBhYHagj1yJ9F4ttmQmWzn4uXEBX9m9u5nK09n9Xa4ZaSPQa7fWKMWbOXkCwDGsw+oAC8/21vBNM5zi4ZjPui9h1OnkocMLnnCxpceQ/eS3W4m4Ank7Wp70TD3mjR7hoy+pGhJy0tnc2xsmq1lnfp8Jqh58Z+LNlulss/4FTsd7XZulH873yj4Ot5pW7g9vy/NbRsYADQAABYAZAACwAHJZykouyfKOGIW8LXHzXGm8ts7entxVKslO0XnVTMO0cMz3nDIE6E6kCwXopWBrT/Ef+N//ANiqxOl4c+rMJV7RlpqyR8ZwlxvmAbg5j9ha/drfOEua6ojeHcXhznt8cHD4qNtXZcc4AeLEaOHtDp1HRZKSlMEhjcQQdHDQ9ei7Omv3R2nn/FPA65Wuya57o9jmpNkbQ/2zIeLCYpb+GRd5grLbwfRjLGDJSP7Zo1Y4ASjwtk74eaxBq8DgOPyW93f3q2hBEyeeN0tMcsRsXBoNr3BxW6uyW+x4yjg6mpaeSUZfM88wEEtIIINiCLEEagjgUzUze6PNevb9bux11L/iFCAZQ3E7CM5mAZgj/cHDwt4eLgquTfTRU/MzoQhChjzBCEKCAQhCABCEIAEIQgAQhCABcsuoUoAYBcA6XF7a2vnZfSGyquEwMjisxrWtGHTC0Dh0XztR0ckrwyJjnuOgaCT6Bel7GmdG0U0+UrW3IPI+74gWyWF03HDQvqtP7WGO/Y3W1NoU7aaSQ4XMZ7WQPgLdTkvn7a02N7n2sXXOXC50C9B2nKYg+AuP1ecWI1wEZgjwNivN6gd4jll6FMN+US8KUGm36uDQbBeWRY/tGx65D+62Wwt6DSkOLXSU77YsGb4XDV2Hi05XHS/jkNh1jHRiAgAgZcndfFTo4ix1g7CeDrXafuuCpKtWRwz3NUYzpUUeubM29SzESRVjHAj2cTRbxae809CmHbSidLMBI3uPDfaH+2w/n8F5HUMDrl1Oxx4kC5P/ABJ+KpJoYwfYt0ufzSM9DPszFaaMXls9xqNsU7PbqIm/ikYPmV51tbb0ImkwuxgvcW4O9cE3GeiyAjZwZ8SpEdO85BuEenrxKiOhnnqxmiaq6x6kys2zLJ3WjADyN3Hxdw8vVdkpmuYGHgBY8suC5BTBvU8/0TxKeqqjWsIvLM0/aGdr4nMcMXkeYW7+jreRwvSzZx+7cXw4ja3Vp5dVhdoz9o8kaDIeHNX+6Udg+dxsGjCPm53kB8VvCfOTxPjFVbhJ/I9Poq6nojaIDs3uJ7j8QDuLcHugdF45vWIvrs/Yf5ZkJaBoMViQOgJIV9U1LnRulAsLEjnYZAdLrHyMINnAg8b65qsl3EvCa5xy5PIhdC4uhVZ22CEIUFQQhCABCEIAEIQgAQhCABXG7WwJayYRxj8Tj7LRxLiqgL1P6PtoMiowzCBiLnFw1cRlhPQKspJcmd0pwg5QWWaXZezYKCHBALvcLOkPtPPHwb0XnG8NURUGQHO5z52OfwWxrtqtJJBuQ0+DeQWA28+zL9VhJ7mYaKNm7dN9TTPaJ9nOcTfC1zgeRbcj4ZeawtZTfwo5gNbtPiND6fJbLYrDFsaSQ++2Qjz7g+V1n3t/9Nv9/L+pNSWIpHKoscL54434KSCTC4O5G61MdU61rYgBm08Rwc0/l8lkgVqKUHso5Bq1o8xxCIHuPDpvrEmUlVHewdYn3XZH46qW9gOouo4p45GhwAseFgR5hdZs+MaNt4EgegK3SOpliZadgFycI5k5fFNClvm1wI8x+SnNgaMw0X58fVOI2E5KiWFzdQqnbMtgGg63J8FqKkXYfBY7bDv4luQH6rOawKa2bjUyHDEXODRq4gDxJstLvC008TIW2s4d49Rr5aeiqN3o8VVEPvX9ASPjZWm+7y6djBwaPVxU1xW3LPEa2blqoV9kmxW2nGOiiYfafh9ALn8lGotpMe0RVLA5oya4ZOb06hSN+3WmjjHuMPxP9ln2lWnzg08PrTp3e9tkza+yzH32EOjOjhp4H7J6H4qsCsqStcy+fdPtA5tI5EHIqDO9rnFzW4QTkMzb1WUlg6Ccv1DaELQ7L2Qyd31h0Zip24W4Q4l0rwAHNY48Lg3dw4Z6YW3Rqjulwa11Sse2PJV0eypZWPkY24YASPecLkEtHEAggnnlqoS9Gra9jIe1faMRjDTiNovj+w0e8y2TgcrcrBef1lQZJHSFrWlxvZos0dAltHqZ35k1hdvvv9o31VEacRz1+/kMoQhPCgIQhAAhCEAKavQ93m4aeMfdv/USfzXn9NCXODWi5JsF6HSdxjW/ZaB6BKXvsaxXQo9n1xdLIwnUkjyNrKo27PieGjTVRn1JDzI3I4iR5lRw5z3jm42Hicgr4K7VFNm92/Ng2NBGDm5rMugzPxIVDVZbLj+9J/3O/RPb21XcZHwawADkBl+RUfa7rUNMzmXO9L//AKTU3lHm9NB5jnvJsoQtjsXOBngfmVjgtRsCotGGnTgirk9t4e/OydGOzfb3HH+k/oVNSHNBFiut0TCR1xSFxCkkaqXWafRYnaL7yu8bemX5LXVMtz0CxUjrknmSfVY2s53iLxFIs91/9XH4/kpe35L1p6OaPQhV+7smGqiP37eoI/NObbNqyS/2yiL8n8nkb686vP8AqOb6T3rHnhoPI2/JU8D9VM3mN5sXMu+B/uqq6pZLEmM6JbaYocllv4IjdwTa6FlnqNFlsum7SZjCLgm7uHdGZz/eq3FXWRQRt7XEYW4hE1pGNrrX7F183My7r+Gh4E4GmqXsOJji0kWuORTbnEm5JJOpOZPmlNRpHfYnJ+Vdvvgap1Kqh5V5vf8AfJbM2yH1TJ6mMPY0gCMEhsbb3AaONtTfU6qqkcCSWtwjg25dbpc5nxSUJqFcYen9vh8haU3LkELiFoVOoQhAAhCFAFvu1/nfyu/Ja53snwPyQhJXcm0eDz53s+ic2Z/nR/jCELdFLvy5FnvT7f8AK1d23/p6X8EnzauoTEuDh6f/ABffYpVfbO/ym+a4hFfJ6zQetmjj0HgEpCE0jtAuP0PghCCCrl9k+CyBQhYWHM8S7ErZX+fH+NvzUnej/WSfiHyC6hEfQeZt/uv+SLt7Vvn+Sq0IWdnqNdL+WhTUoIQqDI41dQhXIAriEIAEIQgD/9k="
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Student</CardTitle>
            <CardDescription>@Students</CardDescription>
          </div>
        </CardHeader>
        <CardContent>This website is awesome!</CardContent>
      </Card>

      {/* Team */}
      <Card className="w-full lg:w-80 lg:absolute right-0 top-0 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex flex-col justify-center items-center pb-2 text-center">
          <Image
            src="/profile.png"
            alt="user avatar"
            width={80}
            height={80}
            className="w-20 h-20 rounded-full mb-4"
          />
          <CardTitle>Nikhil Sahni</CardTitle>
          <CardDescription className="font-normal text-primary">
            Full Stack Developer
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2">
          <p>
            Hello Everyone, My name is Nikhil Sahni. I am a Full Stack Developer
            and if you are interested in working with me, please feel free to
            contact me.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <a
            rel="noreferrer noopener"
            href="https://github.com/nikhilsahni7"
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Github icon</span>
            <GitHubLogoIcon className="w-5 h-5" />
          </a>
          <a
            rel="noreferrer noopener"
            href="https://x.com/Nikhilllsahni"
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">X icon</span>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-foreground w-5 h-5"
            >
              <title>X</title>
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>
          <a
            rel="noreferrer noopener"
            href="https://www.linkedin.com/"
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Linkedin icon</span>
            <Linkedin size="20" />
          </a>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="w-full lg:w-[350px] lg:absolute bottom-[20px] left-0 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row justify-start items-start gap-4">
          <div className="bg-primary/20 p-1 rounded-2xl">
            <Check className="w-5 h-5 text-primary" />
          </div>
          <div>
            <CardTitle>Get Help</CardTitle>
            <CardDescription className="text-md mt-2">
              Get the latest question papers, notes, study guides, and much more
              from here.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
