
export function Content(props) {
    return (
      <div className="bg-white h-full flex flex-col gap-4">
       {props?.children}
      </div>
    );
  }