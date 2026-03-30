"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { Button, Select, Space } from "antd";

// =========================
// ASSETS
// =========================

// Hovuzlar
import a151 from "../../public/assets/hovuzlar/klassikcam/a151.png";
import a151gece from "../../public/assets/hovuzlar/klassikcam/a151gece.png";
import a155 from "../../public/assets/hovuzlar/klassikcam/a155.png";
import a155gece from "../../public/assets/hovuzlar/klassikcam/a155gece.png";
import a158 from "../../public/assets/hovuzlar/klassikcam/a158.png";
import a158gece from "../../public/assets/hovuzlar/klassikcam/a158gece.png";
import a159 from "../../public/assets/hovuzlar/klassikcam/a159.png";
import a159gece from "../../public/assets/hovuzlar/klassikcam/a159gece.png";
import a161 from "../../public/assets/hovuzlar/klassikcam/a161.png";
import a161gece from "../../public/assets/hovuzlar/klassikcam/a161gece.png";
import a161l from "../../public/assets/hovuzlar/klassikcam/a161l.png";
import a161lgece from "../../public/assets/hovuzlar/klassikcam/a161lgece.png";
import a218 from "../../public/assets/hovuzlar/klassikcam/a218.png";
import a218gece from "../../public/assets/hovuzlar/klassikcam/a218gece.png";
import a231 from "../../public/assets/hovuzlar/klassikcam/a231.png";
import a231gece from "../../public/assets/hovuzlar/klassikcam/a231gece.png";
import a236 from "../../public/assets/hovuzlar/klassikcam/a236.png";
import a236gece from "../../public/assets/hovuzlar/klassikcam/a236gece.png";
import a276 from "../../public/assets/hovuzlar/klassikcam/a276.png";
import a276gece from "../../public/assets/hovuzlar/klassikcam/a276gece.png";

import bali from "../../public/assets/hovuzlar/kare/bali.png";
import baligece from "../../public/assets/hovuzlar/kare/baligece.png";
import floralblue from "../../public/assets/hovuzlar/kare/floralBlue.png";
import floralblueGece from "../../public/assets/hovuzlar/kare/floralBlueGece.png";
import floralgreen from "../../public/assets/hovuzlar/kare/floralGreen.png";
import floralgreenGece from "../../public/assets/hovuzlar/kare/floralGreenGece.png";
import judiGreyKare from "../../public/assets/hovuzlar/kare/judiGrey.png";
import judiGreyKareGece from "../../public/assets/hovuzlar/kare/judiGreyGece.png";

// Kənar kafellər
import light from "../../public/assets/kenarkafeller/light.png";
import lightGece from "../../public/assets/kenarkafeller/lightgece.png";
import superstone from "../../public/assets/teraslar/bbb.png";
import superstoneGece from "../../public/assets/kenarkafeller/superstonegece.png";
import judiGrey from "../../public/assets/kenarkafeller/judigrey.png";
import judiGreyGece from "../../public/assets/kenarkafeller/judigreygece.png";
import lucaGrey from "../../public/assets/kenarkafeller/lucaGrey.png";
import lucaGreyGece from "../../public/assets/kenarkafeller/lucaGreyGece.png";

// Orta kafellər
import lightorta from "../../public/assets/ortakafeller/lightorta.png";
import lightortaGece from "../../public/assets/ortakafeller/lightortaGece.png";
import judiGreyorta from "../../public/assets/ortakafeller/judiGreyorta.png";
import judiGreyortaGece from "../../public/assets/ortakafeller/judiGreyortaGece.png";
import lucaGreyOrta from "../../public/assets/ortakafeller/lucaGreyOrta.png";
import lucaGreyOrtaGece from "../../public/assets/ortakafeller/lucaGreyOrtaGece.png";

// Teraslar
import terasLight from "../../public/assets/teraslar/villa3.png";
import terasLightGece from "../../public/assets/teraslar/villa3gece.png";
import terasJudi from "../../public/assets/teraslar/villa2.png";
import terasJudiGece from "../../public/assets/teraslar/villa3gecee.png";
import terasLuca from "../../public/assets/teraslar/hovuz.png";
import terasLucaGece from "../../public/assets/teraslar/hovuzgece.png";
import mavivilla from "../../public/assets/teraslar/mavivilla.png";
import mavivillagece from "../../public/assets/teraslar/mavivillagece.png";
import villa4 from "../../public/assets/teraslar/villa33.png";
import testImg from "../../public/assets/teraslar/villa33.png";

// =========================
// IMAGE LAYER COMPONENT
// =========================
interface ImageLayerProps {
  img: StaticImageData;
  isActive: boolean;
  zIndex: number;
  alt: string;
  style?:any
}

function ImageLayer({ img, isActive, zIndex, alt,style }: ImageLayerProps) {
  return (
    <Image
      src={img}
      alt={alt}
      className="absolute w-full h-full object-cover transition-opacity duration-300"
      style={{...style, opacity: isActive ? 1 : 0, zIndex }}
      width={100000}
      height={100000}
      quality={100}
      priority
    />
  );
}

// =========================
// MAIN COMPONENT
// =========================
export default function Create() {
  const [isNight, setIsNight] = useState(false);

  const hovuzlar = {
    a151: { gunduz: a151, gece: a151gece },
    a155: { gunduz: a155, gece: a155gece },
    a158: { gunduz: a158, gece: a158gece },
    a159: { gunduz: a159, gece: a159gece },
    a161: { gunduz: a161, gece: a161gece },
    a161l: { gunduz: a161l, gece: a161lgece },
    a218: { gunduz: a218, gece: a218gece },
    a231: { gunduz: a231, gece: a231gece },
    a236: { gunduz: a236, gece: a236gece },
    a276: { gunduz: a276, gece: a276gece },
    bali: { gunduz: bali, gece: baligece },
    floralblue: { gunduz: floralblue, gece: floralblueGece },
    floralgreen: { gunduz: floralgreen, gece: floralgreenGece },
    judiGrey: { gunduz: judiGreyKare, gece: judiGreyKareGece },
  } as const;

  const kenarKafelleri = {
    light: { gunduz: light, gece: lightGece },
    judi: { gunduz: judiGrey, gece: judiGreyGece },
    luca: { gunduz: lucaGrey, gece: lucaGreyGece },
    superstone: { gunduz: superstone, gece: superstoneGece },
  } as const;

  const ortaKafeller = {
    light: { gunduz: lightorta, gece: lightortaGece },
    judi: { gunduz: judiGreyorta, gece: judiGreyortaGece },
    luca: { gunduz: lucaGreyOrta, gece: lucaGreyOrtaGece },
    superstone: { gunduz: superstone, gece: superstoneGece },
  } as const;

  const teras = {
    judi: { gunduz: terasJudi, gece: terasJudiGece },
    boz: { gunduz: villa4, gece: terasJudiGece },
    light: { gunduz: terasLight, gece: terasLightGece },
    luca: { gunduz: terasLuca, gece: terasLucaGece },
    mavivilla: { gunduz: mavivilla, gece: mavivillagece },
  } as const;

  type Kafeller = keyof typeof kenarKafelleri | keyof typeof ortaKafeller;

  const [hovuzKey, setHovuzKey] = useState<keyof typeof hovuzlar>("bali");
  const [ortaKey, setOrtaKey] = useState<keyof typeof ortaKafeller>("superstone");
  const [kenarKey, setKenarKey] = useState<keyof typeof kenarKafelleri>("superstone");
  const [terasKey, setTerasKey] = useState<keyof typeof teras>("boz");

  // =========================
  // RENDER
  // =========================
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* HOVUZLAR */}

      {Object.entries(hovuzlar).map(([key, val]) => (
        <ImageLayer
          key={key}
          img={isNight ? val.gece : val.gunduz}
          isActive={key === hovuzKey}
          zIndex={10}
          alt={`hovuz-${key}`}
        />
      ))}

      {/* KENAR KAFELLƏR */}
      {Object.entries(kenarKafelleri).map(([key, val]) => (
        <ImageLayer
          key={key}
          img={isNight ? val.gece : val.gunduz}
          isActive={key === kenarKey}
          zIndex={20}
          alt={`kenar-${key}`}
        />
      ))}

      {/* ORTA KAFELLƏR */}
      {Object.entries(ortaKafeller).map(([key, val]) => (
        <ImageLayer
          key={key}
          img={isNight ? val.gece : val.gunduz}
          isActive={key === ortaKey}
          zIndex={22}
          style={{transform:'scale(1.01) translateX(3px)'}}

          alt={`orta-${key}`}
        />
      ))}

      {/* TERASLAR */}
      {Object.entries(teras).map(([key, val]) => (
        <ImageLayer
          key={key}
          img={isNight ? val.gece : val.gunduz}
          isActive={key === terasKey}
          zIndex={15}
          alt={`teras-${key}`}
        />
      ))}
          <Image
      src={testImg}
      alt={'test'}
      className="absolute w-full h-full object-cover transition-opacity duration-300"
      style={{ opacity:1, zIndex:13}}
      width={100000}
      height={100000}
      quality={100}
    />       <Image
      src={superstone}
      alt={'test'}
      className="absolute w-full h-full object-cover transition-opacity duration-300"
      style={{ opacity:1, zIndex:14}}
      width={100000}
      height={100000}
      quality={100}
    />
        <Image
      src={bali}
      alt={'test'}
      className="absolute w-full h-full object-cover transition-opacity duration-300"
      style={{ opacity:1, zIndex:8}}
      width={100000}
      height={100000}
      quality={100}
    />
      {/* UI PANEL */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-lg p-4 rounded-2xl border border-white/10 w-fit">
        <Space size="middle">
          <Button type="primary" shape="circle" onClick={() => setIsNight(!isNight)}>
            {isNight ? "🌙" : "☀️"}
          </Button>

          <Select
            showSearch
            style={{ width: 180 }}
            value={hovuzKey}
            onChange={(val: keyof typeof hovuzlar) => setHovuzKey(val)}
            options={Object.keys(hovuzlar).map(key => ({ value: key, label: key.toUpperCase() }))}
          />

          <Select
            style={{ width: 120 }}
            value={ortaKey}
            onChange={(val: Kafeller) => setOrtaKey(val)}
            options={Object.keys(ortaKafeller).map(k => ({ value: k, label: `Orta: ${k}` }))}
          />

          <Select
            style={{ width: 120 }}
            value={kenarKey}
            onChange={(val: Kafeller) => setKenarKey(val)}
            options={Object.keys(kenarKafelleri).map(k => ({ value: k, label: `Kenar: ${k}` }))}
          />

          <Select
            style={{ width: 120 }}
            value={terasKey}
            onChange={(val: keyof typeof teras) => setTerasKey(val)}
            options={Object.keys(teras).map(t => ({ value: t, label: `Teras: ${t}` }))}
          />
        </Space>
      </div>
    </div>
  );
}