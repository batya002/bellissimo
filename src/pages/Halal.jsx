import React from 'react'
import halal from "@images/others/halal-cert.png";

export default function Halal() {
  return (
	<React.Fragment>
		<section>
            <div className="container w-[1180px]">
                <div className="flex flex-col gap-y-[15px] items-center">
                    <h1 className="text-center font-bold text-[32px] leading-normal">Сертификат Халяль</h1>
                    <img src={halal} alt="Halal" width="590" height="767" />
                </div>
            </div>
        </section>
	</React.Fragment>
  )
}
