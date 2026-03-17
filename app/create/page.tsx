"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Form, Select, Button, Space } from "antd";

// =========================
// ASSETS
// =========================

// hovuz içi

//klassik cam
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

//porselen kare
import bali from "../../public/assets/hovuzlar/kare/bali.png";
import baligece from "../../public/assets/hovuzlar/kare/baligece.png";
import floralblue from "../../public/assets/hovuzlar/kare/floralBlue.png";
import floralblueGece from "../../public/assets/hovuzlar/kare/floralBlueGece.png";
import floralgreen from "../../public/assets/hovuzlar/kare/floralGreen.png";
import floralgreenGece from "../../public/assets/hovuzlar/kare/floralGreenGece.png";
import judiGreyKare from "../../public/assets/hovuzlar/kare/judiGrey.png";
import judiGreyKareGece from "../../public/assets/hovuzlar/kare/judiGreyGece.png";

// kənar kafellər
import light from "../../public/assets/kenarkafeller/light.png";
import lightGece from "../../public/assets/kenarkafeller/lightgece.png";

import superstone from "../../public/assets/kenarkafeller/superstone.png";
import superstoneGece from "../../public/assets/kenarkafeller/superstonegece.png";

import judiGrey from "../../public/assets/kenarkafeller/judigrey.png";
import judiGreyGece from "../../public/assets/kenarkafeller/judigreygece.png";

import lucaGrey from "../../public/assets/kenarkafeller/lucaGrey.png";
import lucaGreyGece from "../../public/assets/kenarkafeller/lucaGreyGece.png";

// orta kafellər
import lightorta from "../../public/assets/ortakafeller/lightorta.png";
import lightortaGece from "../../public/assets/ortakafeller/lightortaGece.png";

import judiGreyorta from "../../public/assets/ortakafeller/judiGreyorta.png";
import judiGreyortaGece from "../../public/assets/ortakafeller/judiGreyortaGece.png";

import lucaGreyOrta from "../../public/assets/ortakafeller/lucaGreyOrta.png";
import lucaGreyOrtaGece from "../../public/assets/ortakafeller/lucaGreyOrtaGece.png";

// teraslar
import terasLight from "../../public/assets/teraslar/terasLight.png";
import terasLightGece from "../../public/assets/teraslar/terasLightGece.png";

import terasJudi from "../../public/assets/teraslar/terasJudi.png";
import terasJudiGece from "../../public/assets/teraslar/terasJudiGece.png";

import terasLuca from "../../public/assets/teraslar/terasLuca.png";
import terasLucaGece from "../../public/assets/teraslar/teraslucaGece.png";

export default function Create() {
  // =========================
  // THEME
  // =========================
  const [isNight, setIsNight] = useState(false);

  // =========================
  // HOVUZ TYPES
  // =========================
  type KlassikCamModels =
    | "a151"
    | "a155"
    | "a158"
    | "a159"
    | "a161"
    | "a161l"
    | "a218"
    | "a231"
    | "a236"
    | "a276";
  type KareModels = "bali" | "floralblue" | "floralgreen" | "judiGrey";

  type HovuzTipi = "klassikCam" | "kare";
  type HovuzModeli = KlassikCamModels | KareModels;

  // =========================
  // STATES
  // =========================
  const [hovuzTipi, setHovuzTipi] = useState<HovuzTipi>("klassikCam");
  const [hovuzModeli, setHovuzModeli] = useState<HovuzModeli>("a151");

  const { Option, OptGroup } = Select;

  // kafellər
  const [kenar, setKenar] = useState<keyof typeof kenarKafelleri>("superstone");
  const [orta, setOrta] = useState<keyof typeof ortaKafeller>("superstone");
  const [terasTipi, setTerasTipi] = useState<keyof typeof teras>("luca");

  const mode = isNight ? "gece" : "gunduz";

  const hovuzlar = {
    klassikCam: {
      a151: {
        gunduz: a151,
        gece: a151gece,
      },
      a155: {
        gunduz: a155,
        gece: a155gece,
      },
      a158: {
        gunduz: a158,
        gece: a158gece,
      },
      a159: {
        gunduz: a159,
        gece: a159gece,
      },
      a161: {
        gunduz: a161,
        gece: a161gece,
      },
      a161l: {
        gunduz: a161l,
        gece: a161lgece,
      },
      a218: {
        gunduz: a218,
        gece: a218gece,
      },
      a231: {
        gunduz: a231,
        gece: a231gece,
      },
      a236: {
        gunduz: a236,
        gece: a236gece,
      },
      a276: {
        gunduz: a276,
        gece: a276gece,
      },
    },

    kare: {
      bali: {
        gunduz: bali,
        gece: baligece,
      },
      floralblue: {
        gunduz: floralblue,
        gece: floralblueGece,
      },
      floralgreen: {
        gunduz: floralgreen,
        gece: floralgreenGece,
      },
      judiGrey: {
        gunduz: judiGreyKare,
        gece: judiGreyKareGece,
      },
    },
  } as const;

  const kenarKafelleri = {
    superstone: {
      gunduz: superstone,
      gece: superstoneGece,
    },
    light: {
      gunduz: light,
      gece: lightGece,
    },
    judi: {
      gunduz: judiGrey,
      gece: judiGreyGece,
    },
    luca: {
      gunduz: lucaGrey,
      gece: lucaGreyGece,
    },
  } as const;

  const ortaKafeller = {
    superstone: {
      gunduz: superstone,
      gece: superstoneGece,
    },
    light: {
      gunduz: lightorta,
      gece: lightortaGece,
    },
    judi: {
      gunduz: judiGreyorta,
      gece: judiGreyortaGece,
    },
    luca: {
      gunduz: lucaGreyOrta,
      gece: lucaGreyOrtaGece,
    },
  } as const;
  const teras = {
    light: {
      gunduz: terasLight,
      gece: terasLightGece,
    },
    judi: {
      gunduz: terasJudi,
      gece: terasJudiGece,
    },
    luca: {
      gunduz: terasLuca,
      gece: terasLucaGece,
    },
  } as const;
  // =========================
  // HANDLERS
  // =========================
let hovuzSrc: StaticImageData;
if (hovuzTipi === "klassikCam") {
  hovuzSrc = hovuzlar.klassikCam[hovuzModeli as KlassikCamModels][mode];
} else {
  hovuzSrc = hovuzlar.kare[hovuzModeli as KareModels][mode];
}
  const kenarSrc = kenarKafelleri[kenar][mode];
  const ortaSrc = ortaKafeller[orta][mode];
  const terasSrc = teras[terasTipi][mode];

  const toggleTheme = () => {
    setIsNight((prev) => !prev);
  };

  // =========================
  // RENDER
  // =========================

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* HOVUZ */}
      {/* HOVUZ */}
      <Image fill src={hovuzSrc} alt="hovuz" className="object-cover z-10" />

      {/* KAFELLƏR */}
      <Image fill src={kenarSrc} alt="kenar" className="object-cover z-20" />
      <Image fill src={ortaSrc} alt="orta" className="object-cover z-20" />
      <Image fill src={terasSrc} alt="teras" className="object-cover z-20" />

      {/* =========================
          UI – TEST PANEL
      ========================= */}
      <div className="absolute bottom-6 left-6 z-50 bg-black/60 p-4 rounded-xl text-white text-sm space-y-2">
        {/* GECƏ / GÜNDÜZ */}
        <button
          onClick={() => setIsNight((p) => !p)}
          className="px-3 py-1 rounded bg-white/20 w-full"
        >
          {isNight ? "🌙 Gece" : "☀️ Gunduz"}
        </button>

        <Form
          layout="vertical"
          className="absolute bottom-6 left-6 z-50 bg-black/60 p-4 rounded-xl text-white"
        >
          {/* GECƏ / GÜNDÜZ */}
          <Form.Item label={<span className="text-white">Rejim</span>}>
            <Button
              block
              onClick={() => setIsNight((p) => !p)}
              className="bg-white/20 text-white border-none"
            >
              {isNight ? "🌙 Gecə" : "☀️ Gündüz"}
            </Button>
          </Form.Item>

          {/* HOVUZ (TİP + MODEL BİRLİKDƏ) */}
          <Form.Item label={<span className="text-white">Hovuz modeli</span>}>
            <Select
              value={`${hovuzTipi}.${hovuzModeli}`}
              onChange={(val) => {
                const [type, model] = val.split(".");
                setHovuzTipi(type as keyof typeof hovuzlar);
                setHovuzModeli(model as any);
              }}
              className="w-full"
            >
              {Object.entries(hovuzlar).map(([type, models]) => (
                <OptGroup key={type} label={type}>
                  {Object.keys(models).map((model) => (
                    <Option key={`${type}.${model}`} value={`${type}.${model}`}>
                      {model}
                    </Option>
                  ))}
                </OptGroup>
              ))}
            </Select>
          </Form.Item>

          <Form.Item label={<span className="text-white">Kafellər</span>}>
            <Select
              value={
                kenar
                  ? `kenar.${kenar}`
                  : orta
                    ? `orta.${orta}`
                    : `teras.${terasTipi}`
              }
              onChange={(val) => {
                const [group, key] = val.split(".");

                if (group === "kenar") setKenar(key as any);
                if (group === "orta") setOrta(key as any);
                if (group === "teras") setTerasTipi(key as any);
              }}
            >
              {/* KƏNAR */}
              <OptGroup label="Kənar kafel">
                {Object.keys(kenarKafelleri).map((k) => (
                  <Option key={`kenar.${k}`} value={`kenar.${k}`}>
                    {k}
                  </Option>
                ))}
              </OptGroup>

              {/* ORTA */}
              <OptGroup label="Orta kafel">
                {Object.keys(ortaKafeller).map((k) => (
                  <Option key={`orta.${k}`} value={`orta.${k}`}>
                    {k}
                  </Option>
                ))}
              </OptGroup>

              {/* TERAS */}
              <OptGroup label="Teras">
                {Object.keys(teras).map((k) => (
                  <Option key={`teras.${k}`} value={`teras.${k}`}>
                    {k}
                  </Option>
                ))}
              </OptGroup>
            </Select>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
