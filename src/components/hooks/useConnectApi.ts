import { useEffect, useState } from "react";

type GeolocalizationApi = {
    ip: string;
    location: {
        country: string;
        region: string;
        timezone: string;
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

export default function useConnectApi(ipAddress: string) {
    const [isLoading, setIsLoading] = useState(false);
    const [ipLocalization, setIpLocalization] = useState<GeolocalizationApi | null>(null);

    useEffect(() => {

        fetch(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${ipAddress}`)
            .then(res => res.json())
            .then((res) => {
                setIpLocalization(res)
                console.log(res);
            })
            .catch((error) => {
                throw new Error(error);
            }).finally(() => setIsLoading(false))
    }, [ipAddress])

    return {
        isLoading,
        ipLocalization
    }
}