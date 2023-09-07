import React,{useState,useEffect} from "react";

import Axios  from "axios";
import { useNavigate } from "react-router-dom";
import Mentornavbar from "../../Navbar/Mentornavbar";
function Home() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:5000").then((res) => {
      if (res.data.admin === true) {
        console.log("home page user: " + res.data.userData);
        setUser(res.data.userData);
      } else if (res.data.admin === null) {
        console.log("no user");
        navigate("/login");
      }
    });
  });

  return (
    <div>
    <Mentornavbar data={user}/>
      
    <header className="bg-blue-300">
        <div className="flex">
          <div className="p-8 text-white rounded-2xl mr-28 w-1/2">
            <p className="text-2xl font-bold">
              Idea Pitching: Transforming the World with Innovation
            </p>
            <p className="mt-4 text-lg">
              Discover how great ideas can make a positive impact on the world
              and drive change.
            </p>
            <p className="mt-4 text-lg">
              Join us on the journey of innovation and creativity!
            </p>
          </div>
          <div className="w-1/2 h-80 items-center p-5">
            <img
              src="https://www.shutterstock.com/shutterstock/videos/1081629419/thumb/1.jpg?ip=x480"
              alt=""
              className="object-cover h-full rounded-2xl"
            />
          </div>
        </div>
      </header>

      <div className="flex">
        <div className="w-1/2 h-80 items-center p-5">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACACAMAAABk1r8fAAABnlBMVEU9R1L3jCDLv6/80aV6iJb5u3gfQFW4cjn1jCEdP1ZfUUxFMynISST8jh42RVPZgC389t5IUFiglY2tfkvy8vKVUhCwvMeVoKv9zJn07tdkZmmOmaPBtqhUWmBZX2PWzry0qp0sN0P5s2j77tCLiYT//+mpoJVtfpBcUlbCjF33hAD/wnr8zqxmXWEzPkrPSSArPU+yro1xcnJhOBOPaVXFbxjRdRe5kmqbmYCFSA5ULQdkNgnts3Xb29tCPDxwZl6dd1DJycmiaj75nkrhfxv7xIk0LCq6QSiySS+XSDncqHH3lzv5p1y4aBmlXxlKLBJeQCSPXi94Wzt1RBRLIQBEFQDUq4HkvpLpoV3vgy/8mVvjbh/bxarQik/33bp+ZFnZiUGWZ0pCNkCGeXa/oYOsi3R2SiXz2skyKTvjdAAAHDxZQzYkKC1eQ0qhQzSLSD9/TUcmFg9tREbikGbNWzZaVmfnpn6kcDLAl428ZUuRjaDlup+yeGLadEubbmqNeWSUMzeBNzztcz33c1Lrxb3xXyf7UBH1mIbysaURJTpyargBAAAOAklEQVR4nO2cjV/a1hrHIZCKViIJCjEQAgwCRQyY2bF2UFCkWtHetd2kd7crrcLcnVXX2s722l3avdyt//U9JwFJQt46iiOU36faj+Q8OTlfnuc5zzlHsdnGGmssiwm7NArCLgRVcnXC+lpNXgQsbGrGbbe63DNTY1YmNWZlXmNW5jVmZV6jw8o98DdjNFilUvZquVp1pwbKaxRYpVxRUlSlPEha1mfltqOOrshyakD9jAKrLYdcqGtg74rFWbmiojtVKmQHVqU6IFhWZyWgqqAo2mU1MFgWZ1UmBVQSUGIYDqIvq7MSUclJAW0NpDNLs0ptCaiUpGAUfvjOrM4KZvVerwIqD8KxrMzKXdVwK5CxxqzkSsFJEK2osSIHkd0tzaqiFYIOx5iVXCkSFqHqrAaR3K3OSktjVnKNWZlXSnUKVM9XH6J3S7OKaqIi5S3Xtm9vf9b3/oOVWdldmqyi0t5c29f/ATS31ucjWJqVdsIqS4e4ff1TqC/v9FlIWJqVu6yBqiKh4nbd+1TU3e3+nsHSrOx21aLdQUqXg+7P7l3/6uuvvvr67t25j5mVu6oahbLVoHvt2t2dGrlTc3zcrNSjEE3Jm9y5/89vKmi5POHtszNrs7K75UcTJAlWPfLiwI3eR2v3//VNvrJW669CtToru+zEywEPCaPyUy/31la0shXdup8vVz7qGOxJWfBAVVF0usrRaLSCRqNon2cWlmfVs9Ipw9Nn+Rgr4ql0v5ul1mdlryoSe5UkFWcTLhImsmi/e1ojwEpevVfBxEc6KvJBpqLA2fp+gFFgJQtCF6wSQMBVXV2trVUd+f63GkaBlbRsEFY37i0AK1dfXgb/oKbCD0jy236XzqPASpawUHFU5Yqj9mJxkRaUXIx7HrJ0vd9HGAVWrh5W9lQ1eqVeLwJYL+jkbtjjCSeTdH3iY68ZgK509agzLpilZmZmHk08Tu4yHiaZTC4uLvb3ECPB6trcua5KhgZld08kk/PxmIDqRX+ONWKsrl2VFVECK25v3vO9wIqe6aubkWbl3opW75c4No7sCqyK43ylycqFVipoYzcYJwRW9Di368TgFljc7Bwy8UUhtb/os8IabVb2Mlohm0w8KU6D4/rK7payUlxyzeRIh0dART8es7Lbt+fuXYf64trcmnJ8a1MNkqzvwhDsbxYcEVau2x1WPRnJPXODr5FkE7AqjvdkoFxzX0Ddu9rTiXtml5h/SJI7RXp1zArKdRWmrN4IhOPj2HnPDoBFPRrvM0C51j4TpMYqy3riuw2yxo9ZdcYhrv5UxpcNA1bJVgt/1Hv1PfsYEVba44OsYH1lm+j/Xh8Lq+Rq//cadVa2oCfOQ1bL43nQYHxr9WA8zkJWUx89K7d9zaWa1TvXJ5C4h9mFsHpnyffsathYuVOpFPwyPYLb3925fXVNk5a7+jDuETYabCPGyp0qO/ahULc5Wu7tyzdvXv7yuzvbmud/JGCFfJ9MYr1V/fvpAlm5DGW3V/cLK7OC9rf+bWwATOZuXhb15ZxdvcUW/PvenVKztKbewLQuiJUNuzRprAQ2WyjMduT7wYTJZOTg4ECEdfNJRLVFcwGFyi8qXgdPdHi0vr5xzJnpR7C4EFSm9G5ldgWqg2vFjNGNy5cPBEFcN1QaZHMQFPhXlI0Usx0fbmQy09PTmcxR8oM8/wUK532zbNetgAIRQ6Mb7Qi8rAkLssqDr00ZKyx5DChNi8psHGLD4zJmhAcKIATPYRWQRj1raDR1Wa7eFpDVZlPBCjvcWN84mu4o8+OhxWi9E9I6hFVoNBo572kJN7DAqOZTI1YYYJVrLaCbi10YmA0mqo1zVtPJjY2jZzYL0aK70dc49Xq9p6dFg6fHYumWnFVvEAqsigpWx9Pr0+vr5251dAgz1/GHHtDgxHVZMQjwqiDDEEZB2Eg3DoxZLTRpGSsQgZlpiTK3joUk/8wyjiVhVQBeFWyc5ghO3wR/kG6a8KuFOg7mwq6TYj/KUE1njkVWGx98TAMTJ4LKzTGzDS/UvRKt/05zy2d1I1Y2wKqI52U1w63M9MnzHlbTmcMPPaSBKSLOgY07V2YRmK+8q967kstTyqqZe0G9bE01ZbRUbgtY0bZNGatnz09+Onl+7lyZI9HRMseWCcJIQGCFrHoZRmAFNNW9XFpWjCTyn5V042X65YEhKwx8k9Wiy68bO7lXr55PZwRiG8/aecsyrGwRMVmVvEihjWri8flF3FtXYXV25nhZ1w1BgAnNYs0FGaviHqhKms3Wj69/+hnCwi3HiuPbiR0RioZTb7N+vvrAil5lDGb3XqbT6Vrzv0/13MqWW8hnMVBgSXJ7cbNZI0myVjupVU4yMFGtWywG21GIeFcLIGGdnjKz/u4iByuVcEUFgRVfA1ZntZdP9dwKsNrEsLqUle3bfKMm/CnFT+TCImB1JJbwFsrtQJHYLJwDoXs9YGaDfLdmwLylUkvRGrvUAH6VTree6qDCcws5DCuCybDDCmuV77dZAVoQ1RuR1frugIY1GAHPyp022mXWtXNHwjBayF+KD7rGWmmoszYqNVYYYNUErPJdVja8tNkmRdbIzPrRm7cbYroa3LgGokii6X1MiBt+xY5bYcn6ssBqWZ6zMEpglW7UDw7qddXCFaN3FloCq1bXdJLquBVJrr958/ZYrB0OLZSuBE3ePV29d6fJAFahc1bL7XlRMRdi9JkIK33WOGtcUrsd9CvAanFzQWa6c87q1Zu3h0eWdCtbxLmyv8+w9am9gL+7zVDqsFK889ge5HT2cN7zycPGO7X7YclNEH3wu8SvbNnmOauTtzaxulq3znKwrXB7RUhFuG5M0R1WpZ7FNHHWaLXTW2JSZbBtVoJ3SV6lhSCsAfdaPIRLHiALFVeCuNhKIAHk9AcSks2rc1a00gDLvrMx+6TwoZkPc4uXssoBS1hJX54EjrWzAyPxh/auw4bRZtlQCccppzPh7CpBt5+/k68UlTuG2fD65kI0Khw+oFF0Ad1sARvZZnFxU5gBwWwos81mJ7PN9P7+QxsmhuAt1XQ3nMJp3tmrBA1dCcMFx1qWGWBZW7GZFw9pulpAc62ihBZghYYwG1jk5JQ9glquUJgt8OLC2TKTIEeHEiqkBIVs8HwRJitc5jB4C6yKURUt5HOhbjORVbalYMXZqBW/M5EI+Pz1V88zmemLGeiHkF+LlNMZgJ51qScCs011UlCVbrxJWEkSEkdTiXa8g+To3Pvvq3WDbcXhEeXTZuV3cnCXwStfO2P4TkULFUrWuu2KeZSGrNDNLiu614n3Ej3zxnAqEvAFNFn54Ap6EYRgUp6zazqsHHS3XT7fYdW2VyElKGGJmTDi82kHoc8fgjsyXvmGcrbl0GRVIR2tTiHW9ivhv3ZnWpmRuuhh/zX5fJpB6AeXuGwdspJaZJsOUpOVw1GbFFph2KUimqc5WxaUDm3WXEijp5AVUhZH6bMKcNkSnAalNnTD4dBh5bBBx8Lxw2e3fjkp0iEallk4EJwBNXqijX8l4O9XxAlYaSUscMlP97DCqDNtVvDDLZp8jPC/fvX8919//eNzoKWTbxrw/1gsGdHoCX/ytxEwr4jfp5mwAuCSL8H1sCrWHFoJS/wo26UlpvDbn2dAD5aWlq78/Pv/GkuCihqsEpwl/EqHFbzkc8IFYUk2De7BDyXSDkHIamkpKNJZevT7L7/+8eeDNqsntGpPVCQy9AmLy3Iiq4SaBFaB+umpjNW7H1rw45uiqqoIH4O10+a0hMwWfisUmM6PSzGKCqgJpHYO5zhumNc6bDzuAYqL8sjV/hlcWJawisyLL3+ip3lP+PMlmfhOR7IelGIMDrv/TrEeU6pL9q6ypiziLB/7XCpe+U6oWjFDXMAT78+Km497elxQPmJwOU5EgLLniuCeeWN5gsNbvmM8woTDQURH4TCCMKVlCSuEYcBLOhKuxpR9IcEwwQZ1RBBBhBheVlyIIHiaJ7QVC9ExgpVuM0QIFmRogtU0YfkQz7KUYl7jwL30e6Ip8DAXDOA9xFFseC8UC2uLpXg2HJSxirEED1hpiw/F2HAPq3CQoPiwtluxIT4Y7PHG4RFHBZlYKMZoh2CQ4oPIAxkrlglTlE7cMjzFMsFeVkiYiukEO2CFMLHhrbIAK0SfVZgWWNHSGETCvAErApEe8YtdhREWcrcuq1AYIYxZIV5JyjXHCnlvVuA5EGRviFlRkBWvyyoWRFakR4MCK1pv7gQxiOwTyl8ENMVKSXiIxPGIKVYxKaswZBXWZRVG9huKqpJjDVjFhpgVB4tF54opVoEnkXO9S4NkZMiKSScjchGmWMGWQ8eLdsI1q0/MqdpiBVY+6TrXgQT3DFk9cLCK5TF0R0rHKhYCWU4wcg7bQocWNhHMsEIAK4lWAKuYHqsgBVkxPoVW9FkxAiuhpX9IWYER6LIiaELBymeCVVBpY3FWAT9U0Awrn1+qsBlWQb9SQTgl6LDiASvRKjBsrARxNtYEK4aWZlsuxOizAlU9iF1ckaEjMUaXFcKH4LMMXV6XyIhVDLKSL/4FVqwBK0LZERdjgrplGQ/q4jA93KyC+jM5oMLITWgGMcGqZ3+TZ8D0acCKtTgr4n1ZsRTFIL1/Jcab8quLGvdfEEZAVjo7JXtgvcLIx40DEjqsGMhKZREMWIFyU1tgRmCGmhUXQ4KhEK2tEGCFKMYN60ZKRyEQg72sKFDuh3QVHuZtUSCaonB9gRZyE4ynaAMbcNOefIXzvIEZxQ/3b4BwnFE27W1hxkbl6Mrw9M/4vmONNZal9H/SWzwtB8wXdQAAAABJRU5ErkJggg=="
            alt=""
            className="object-cover h-full rounded-2xl"
          ></img>
        </div>
        <div className="p-8 text-white rounded-2xl mr-28 w-1/2">
          <p className="text-2xl font-bold">
            Idea Pitching: Transforming the World with Innovation
          </p>
          <p className="mt-4 text-lg">
            Discover how great ideas can make a positive impact on the world and
            drive change.
          </p>
          <p className="mt-4 text-lg">
            Join us in the journey of innovation and creativity!
          </p>
        </div>
      </div>

      <div id="Mentor" className="bg-blue-200 border rounded-xl">
       

        <hr className="w-full horizontLine"></hr>
        <div id="about" className="bg-sky-200">
          <div className="text-center  outline-none shadow-sm mx-auto p-3">
            <h1 className="mt-20 sm:text-5xl text-2xl cursor-default font-serif font-bold">
              About
            </h1>
            <p className="sm:mt-10 mt-5 mb-20 text-sm sm:text-2xl text-blue-950 cursor-default font-serif font-semibold">
              This website will take your innovative ideas to the height of moon
            </p>
          </div>
        </div>

        <footer className="bg-black flex py-6 lg:px-8 sm:px-6 h-24 justify-center shadow overflow-hidden outline-none relative items-center mx-auto text-green-100">
          <div>
            <div>
              <h1 className="text-center mx-2 mx:text-5xl text-2xl cursor-default font-serif font-bold mt-4 mb-4">
                Contact Us
              </h1>
            </div>
            <div className="inline mx-4 items-center justify-self-end mb-4 max-w-7xl cursor-pointer font-serif font-semibold pr-20">
              <a href="www.facebook.com">
                {" "}
                <i className="fa-brands fa-facebook fa-fade fa-2xl"></i>
              </a>
            </div>
            <div className="inline mx-4 items-center mb-4 justify-center max-w-7xl cursor-pointer font-serif font-semibold pr-20">
              <a href="https://www.instagram.com/oa_sid/">
                <i className="fa-brands fa-instagram fa-fade fa-2xl"></i>
              </a>
            </div>
            <div className="inline mx-4 items-center mb-4 justify-end cursor-pointer font-serif font-semibold">
              <a href="https://www.twitter.com/">
                <i className="fa-brands fa-twitter fa-fade fa-2xl"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
