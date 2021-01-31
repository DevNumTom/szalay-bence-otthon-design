import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Title from './Title';

interface Nyilaszaro {
  width: number;
  height: number;
  piece: number;
}

interface Fal {
  width: number;
  height: number;
}

type Props = {
  munkadijSzorzo: number;
};

export default function Calculator({ munkadijSzorzo }: Props) {
  const [nyilaszarok, setNyilaszarok] = useState<Nyilaszaro[]>([
    { width: null, height: null, piece: 1 },
  ]);
  const [falak, setFalak] = useState<Fal[]>([
    { width: null, height: null },
    { width: null, height: null },
    { width: null, height: null },
    { width: null, height: null },
  ]);
  const [isFalakElterok, setIsFalakElterok] = useState(false);
  const router = useRouter();
  const getM2s = (width: number, height: number): string => {
    if (!width || !height) {
      return null;
    }
    return `${width * height}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' m2';
  };

  const addNyilaszaro = () =>
    setNyilaszarok([...nyilaszarok, { width: null, height: null, piece: 1 }]);
  const removeNyilaszaro = (index: number) =>
    setNyilaszarok(nyilaszarok.filter((_, i) => i !== index));
  const increasePieces = (index: number) =>
    setNyilaszarok(
      nyilaszarok.map((el, i) =>
        i === index ? { ...el, piece: el.piece + 1 } : el
      )
    );
  const decreasePieces = (index: number) =>
    setNyilaszarok(
      nyilaszarok.map((el, i) =>
        i === index ? { ...el, piece: el.piece - 1 } : el
      )
    );
  const setFalWidth = (index: number, widthSize: number) => {
    setFalak(
      falak.map((el, i) =>
        i === index
          ? {
              ...el,
              width: widthSize,
            }
          : el
      )
    );
  };
  const setFalHeight = (index: number, heightSize: number) => {
    setFalak(
      falak.map((el, i) =>
        i === index
          ? {
              ...el,
              height: heightSize,
            }
          : el
      )
    );
  };
  const setNyilaszaroWidth = (index: number, widthSize: number) => {
    setNyilaszarok(
      nyilaszarok.map((el, i) =>
        i === index
          ? {
              ...el,
              width: widthSize,
            }
          : el
      )
    );
  };
  const setNyilaszaroHeight = (index: number, heightSize: number) => {
    setNyilaszarok(
      nyilaszarok.map((el, i) =>
        i === index
          ? {
              ...el,
              height: heightSize,
            }
          : el
      )
    );
  };
  const getOsszesen = (): number => {
    const formattedFalak = isFalakElterok
      ? falak
      : [falak[0], falak[1], falak[0], falak[1]];
    const falakOsszesen = formattedFalak.reduce(
      (acc, curr) => acc + curr.height * curr.width,
      0
    );
    const nyilaszarokOsszesen = nyilaszarok.reduce(
      (acc, curr) => acc + curr.height * curr.width,
      0
    );
    const amount = falakOsszesen - nyilaszarokOsszesen;
    return amount;
  };
  const getFesteskoltseg = () => {
    return (
      `${getOsszesen() * munkadijSzorzo}`.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ' '
      ) + ' Ft'
    );
  };
  const getOsszM2 = () => {
    return `${getOsszesen()}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' m2';
  };
  return (
    <div className='card'>
      {router.pathname.startsWith('/arkalkulator') && (
        <Title title='Árkalkulátor' />
      )}
      <p className='sub-title'>Falak méretének megadása</p>
      <div className='form__group'>
        <div className='row'>
          <div className='input-field'>
            <input
              type='number'
              className='form__input'
              id='name'
              placeholder='1. Fal szélessége'
              onChange={(e) => {
                e.preventDefault();
                setFalWidth(0, +e.target.value);
              }}
            />
            <label htmlFor='name' className='form__label'>
              1. Fal szélessége (m)
            </label>
          </div>
          <div className='input-field'>
            <input
              type='number'
              className='form__input'
              id='name'
              placeholder='1. Fal magassága'
              onChange={(e) => {
                e.preventDefault();
                setFalHeight(0, +e.target.value);
              }}
            />
            <label htmlFor='name' className='form__label'>
              1. Fal magassága (m)
            </label>
          </div>
          <p className='m2'>{getM2s(falak[0].width, falak[0].height)}</p>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='number'
              className='form__input'
              id='name'
              placeholder='2. Fal szélessége'
              onChange={(e) => {
                e.preventDefault();
                setFalWidth(1, +e.target.value);
              }}
            />
            <label htmlFor='name' className='form__label'>
              2. Fal szélessége (m)
            </label>
          </div>
          <div className='input-field'>
            <input
              type='number'
              className='form__input'
              id='name'
              placeholder='2. Fal magassága'
              onChange={(e) => {
                e.preventDefault();
                setFalHeight(1, +e.target.value);
              }}
            />
            <label htmlFor='name' className='form__label'>
              2. Fal magassága (m)
            </label>
          </div>
          <p className='m2'>{getM2s(falak[1].width, falak[1].height)}</p>
        </div>
        <div className='row'>
          <div className='box'>
            <input
              onChange={() => setIsFalakElterok(!isFalakElterok)}
              id='cb'
              type='checkbox'
            />
            <span className='check'></span>
            <label htmlFor='cb' className='cb-label'>
              Szemközti falak mérete eltérő?
            </label>
          </div>
        </div>
        {isFalakElterok && (
          <>
            <div className='row'>
              <div className='input-field'>
                <input
                  type='number'
                  className='form__input'
                  id='name'
                  placeholder='3. Fal szélessége'
                  onChange={(e) => {
                    e.preventDefault();
                    setFalWidth(2, +e.target.value);
                  }}
                />
                <label htmlFor='name' className='form__label'>
                  3. Fal szélessége (m)
                </label>
              </div>
              <div className='input-field'>
                <input
                  type='number'
                  className='form__input'
                  id='name'
                  placeholder='3. Fal magassága'
                  onChange={(e) => {
                    e.preventDefault();
                    setFalHeight(2, +e.target.value);
                  }}
                />
                <label htmlFor='name' className='form__label'>
                  3. Fal magassága (m)
                </label>
              </div>
              <p className='m2'>{getM2s(falak[2].width, falak[2].height)}</p>
            </div>
            <div className='row'>
              <div className='input-field'>
                <input
                  type='number'
                  className='form__input'
                  id='name'
                  placeholder='4. Fal szélessége'
                  onChange={(e) => {
                    e.preventDefault();
                    setFalWidth(3, +e.target.value);
                  }}
                />
                <label htmlFor='name' className='form__label'>
                  4. Fal szélessége (m)
                </label>
              </div>
              <div className='input-field'>
                <input
                  type='number'
                  className='form__input'
                  id='name'
                  placeholder='4. Fal magassága'
                  onChange={(e) => {
                    e.preventDefault();
                    setFalHeight(3, +e.target.value);
                  }}
                />
                <label htmlFor='name' className='form__label'>
                  4. Fal magassága (m)
                </label>
              </div>
              <p className='m2'>{getM2s(falak[3].width, falak[3].height)}</p>
            </div>
          </>
        )}
      </div>
      <p className='sub-title'>Nyílászárók kivonása</p>
      {nyilaszarok.map((el, i) => (
        <div key={i} className='row'>
          <div className='input-field'>
            <input
              type='number'
              className='form__input'
              id='name'
              placeholder='Nyílászáró szélessége'
              onChange={(e) => {
                e.preventDefault();
                setNyilaszaroWidth(i, +e.target.value);
              }}
            />
            <label htmlFor='name' className='form__label'>
              Nyílászáró szélessége (m)
            </label>
          </div>
          <div className='input-field'>
            <input
              type='number'
              className='form__input'
              id='name'
              placeholder='Nyílászáró magassága'
              onChange={(e) => {
                e.preventDefault();
                setNyilaszaroHeight(i, +e.target.value);
              }}
            />
            <label htmlFor='name' className='form__label'>
              Nyílászáró magassága (m)
            </label>
          </div>
          <div className='plus'>
            <FontAwesomeIcon
              width={30}
              cursor={'pointer'}
              icon={faPlusCircle}
              onClick={() => addNyilaszaro()}
            />
            {nyilaszarok.length > 1 && (
              <FontAwesomeIcon
                style={{ marginLeft: 10 }}
                width={30}
                cursor={'pointer'}
                icon={faMinusCircle}
                onClick={() => removeNyilaszaro(i)}
              />
            )}
          </div>
        </div>
      ))}
      <p className='sub-title'>{`Összesen: ${getOsszM2()}`}</p>
      <p className='sub-title'>{`Teljes festés díja: ${getFesteskoltseg()}`}</p>
      <style jsx>{`
        .card {
          width: 70%;
          margin: 0 auto 50px;
          box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          -webkit-box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          -moz-box-shadow: -1px 2px 33px 0px rgba(0, 0, 0, 0.51);
          background: #f0f0f0;
          border-radius: 16px;
          padding: 50px;
        }
        .plus {
          margin-left: 50px;
          margin-top: 22px;
        }
        .remove {
          margin-left: 10px;
        }
        .m2 {
          margin-left: 50px;
          font-size: 22px;
          font-weight: bold;
        }
        .sub-title {
          font-size: 1.4rem;
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 40px;
          margin-top: 0px;
        }
        .form__group {
          display: flex;
          flex-direction: column;
        }
        .row {
          width: 100%;
          display: flex;
        }
        .input-field:first-child {
          margin-right: 50px;
        }
        .form__label {
          font-family: 'Roboto', sans-serif;
          font-size: 1.2rem;
          margin-left: 2rem;
          margin-top: 1rem;
          display: block;
          transition: all 0.3s;
          transform: translateY(-7.5rem);
        }

        .form__input {
          font-family: 'Roboto', sans-serif;
          color: #333;
          font-size: 1.2rem;
          margin: 0 auto 22px;
          padding: 1.5rem 2rem;
          border-radius: 0.2rem;
          background-color: rgb(255, 255, 255);
          border: none;
          width: 90%;
          display: block;
          border-bottom: 0.3rem solid transparent;
          transition: all 0.3s;
        }

        .form__input:placeholder-shown + .form__label {
          opacity: 0;
          visibility: hidden;
          -webkit-transform: translateY(0rem);
          transform: translateY(0rem);
        }

        .box {
          width: 300px;
          margin: -15px 0 50px 10px;
          display: flex;
          align-items: center;
          user-select: none;
        }

        .cb-label {
          font-size: 1.2rem;
          color: #4d4d4d;
          position: absolute;
          z-index: 10;
          padding-left: 40px;
          cursor: pointer;
        }

        #cb {
          opacity: 0;
          visibility: hidden;
          position: absolute;
        }

        #cb:checked ~ .check {
          border-color: #000;
          box-shadow: 0px 0px 0px 15px #000 inset;
        }

        #cb:checked::after {
          opacity: 1;
          transform: scale(1);
        }

        .check {
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          border-radius: 100px;
          background-color: #fff;
          border: 2px solid #000;
          box-shadow: 0px 0px 0px 0px #000 inset;
          transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);
        }

        .check::after {
          content: '';
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 4;
          position: absolute;
          transform: scale(0);
          background-size: 50%;
          background-repeat: no-repeat;
          background-position: center;
          transition-delay: 0.2s !important;
          transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
        }
        @media screen and (max-width: 910px) {
          .row {
            flex-direction: column;
          }
          .input-field:first-child {
            margin-right: 0;
          }
          .m2 {
            margin-left: 10px;
            margin-top: -30px;
            margin-bottom: 50px;
          }
          .plus {
            margin-left: 10px;
            margin-top: -30px;
            margin-bottom: 50px;
            text-align: end;
          }
        }
      `}</style>
    </div>
  );
}
