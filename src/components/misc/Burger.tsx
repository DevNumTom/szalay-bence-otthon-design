type Props = {
  active: boolean;
  onClick: () => void;
};
export default function Burger({ active, onClick }: Props) {
  return (
    <div className={'container ' + (active ? 'active' : '')} onClick={onClick}>
      <div className={'meat meat-1'} />
      <div className={'meat meat-2'} />
      <div className={'meat meat-3'} />
      <style jsx>
        {`
          .container {
            position: fixed;
            width: 38px;
            height: 38px;
            cursor: pointer;
            top: 5rem;
            right: 3.25rem;
            z-index: 20;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 50px;
            padding: 5px;
            -webkit-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.5);
            -moz-box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.5);
            box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.5);
          }
          .meat {
            position: absolute;
            width: 28px;
            height: 3px;
            background: #222;
            top: calc(50% - 2px / 2);
            right: calc(50% - 28px / 2);
            transition: all 150ms ease-in;
          }
          .meat-1 {
            transform: translateY(-10px);
          }
          .meat-2 {
            width: calc(28px - 6px);
          }
          .meat-3 {
            transform: translateY(10px);
          }
          .active .meat-1 {
            transform: rotate(45deg);
          }
          .active .meat-2 {
            opacity: 0;
          }
          .active .meat-3 {
            transform: rotate(-45deg);
          }
        `}
      </style>
    </div>
  );
}
