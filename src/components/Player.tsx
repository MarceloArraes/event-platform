//import {  Player, DefaultUi } from "@vime/react";
import YouTube from "react-youtube";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";

//import { gql, useQuery } from "@apollo/client";
import { useGetLessonBySlugQuery } from "../graphql/generated";

/* const GET_LESSONS_BY_SLUG_QUERY = gql`
  query MyQuery($slug: String = "") {
    lesson(where: { slug: $slug }) {
      description
      title
      videoId
      teacher {
        bio
        name
        avatarURL
      }
    }
  }
`; */

/* interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    description: string;
    videoId: string;
    teacher: {
      name: string;
      bio: string;
      avatarURL: string;
    };
  };
} */

interface VideoPlayerProps {
  lessonSlug: string;
}

function VideoPlayer(props: VideoPlayerProps) {
/*   const { data } = useQuery<GetLessonBySlugResponse>(
    GET_LESSONS_BY_SLUG_QUERY,
    {
      variables: {
        slug: props.lessonSlug,
      },
      fetchPolicy: "no-cache",
    }
  ); */
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Loading...</p>
      </div>
    );
  }

  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      //autoplay: 1
      color: 'white',
      rel: 0,
    }
  };

  return (
    <div className="flex-1 ">
      <div className="bg-black ">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video items-center justify-center">
          {data.lesson.videoId && (
            <YouTube videoId={data.lesson.videoId}
            loading="lazy"
            iframeClassName={"embed embed-youtube aspect-video h-full w-full"}
            opts={opts}/>)}
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data?.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed  ">
              {data?.lesson.description}
            </p>
            {data?.lesson.teacher && (
            <div className="flex items-center gap-4 mt-6 ">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src={data?.lesson.teacher.avatarURL}
                alt="Marcelo's git"
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">
                  {data?.lesson.teacher.name}
                </strong>
                <span className="text-gray-200 text-sm block">
                  {data?.lesson.teacher.bio}
                </span>
              </div>
            </div>)}

          </div>
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors duration-200"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>
            <a
              href="#"
              className="p-4 text-sm border-blue-500 border-2 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors duration-200"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <a
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors duration-200"
            href=""
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-gray-200 text-sm mt-2">
                {" "}
                Acesse o material complementar para acelerar o seu
                desenvolvimento.
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
          <a
            className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors duration-200"
            href=""
          >
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-gray-200 text-sm mt-2">
                {" "}
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                m??quina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
