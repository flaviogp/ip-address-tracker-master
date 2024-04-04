import { useEffect, useState } from "react";

export type GeolocalizationApi = {
    ip: string;
    location: {
        country: string;
        region: string;
        timezone: string;
        city: string;
        lat: number;
        lng: number;
        postalCode: number;
        geonameId: number;
    };
    domains: string[];
    as: {
        asn: number;
        name: string;
        route: string;
        domain: string;
        type: string;
    },
    isp: string;
}


export default function useConnectApi(ipAddress?: string) {
    const [isLoading, setIsLoading] = useState(false);
    const [ipLocalization, setIpLocalization] = useState<GeolocalizationApi | null>(null);


    useEffect(() => {

        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&${ipAddress ? `ipAddress=${ipAddress}` : ''}`)
            .then(res => res.json())
            .then((res) => {
                setIpLocalization(res)
            })
            .catch((error) => {
                console.log(error)
                throw new Error(error);
            }).finally(() => setIsLoading(false))
    }, [ipAddress])

    return {
        isLoading,
        ipLocalization,
    }
}