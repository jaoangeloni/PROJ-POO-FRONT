
export function Content(props) {
    return (
      <div className="bg-white h-full items-start grid grid-cols-4 gap-4 flex-wrap">
       {props?.children}
      </div>
    );
  }