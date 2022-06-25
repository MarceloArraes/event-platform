import { CheckCircle } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

function LessonCard(props: LessonProps) {
  const {slug} = useParams<{slug: string}>(); 
  const isAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h' mm'm'",
    { locale: ptBR }
  );

  const isActiveLesson = slug === props.slug;
  
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="">
        <header className={classNames(` rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500`,{
        'bg-green-500': isActiveLesson
        })}>
          {isAvailable ? (
            <span className={classNames('flex items-center gap-2 text-sm text-blue-500 font-medium',{})}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className={classNames("flex items-center gap-2 text-sm text-orange-500 font-medium",{})}>
              <CheckCircle size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold ">
            {props.type === "live" ? "Aula ao vivo" : "Aula presencial"}
          </span>
        </header>
        <strong className={classNames(' mt-5 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  );
}

export default LessonCard;
