import { ActorContainer,ActorImage,ActorInfo,ActorName } from "./CastInfoPage.style";
const BASE_ACTOR_IMG_URL = "https://image.tmdb.org/t/p/w200";
const ALT_IMG_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

function CastInfoPage({cast}){
    const {id,profile_path,name} = cast;
    return(
    <ActorContainer key={id}>
        { profile_path !== null &&
              <ActorImage src={`${BASE_ACTOR_IMG_URL}${profile_path}`} alt="" />
        }
        { profile_path === null &&
              <ActorImage src={`${ALT_IMG_URL}`} alt="" />
        }
        <ActorInfo>
                <ActorName>{name}</ActorName>
              </ActorInfo>
    </ActorContainer>
    )

}
export default CastInfoPage;