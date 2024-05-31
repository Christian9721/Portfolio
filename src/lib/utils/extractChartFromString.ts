const str = `I implemented rigorous testing procedures to maintain application stability and
reduce post-release defects using Jest & Cypress with 85% coverage. <DoughnutChart data={[80,20]} type="donut" width="100%" text="none" substring="coverage"/>`;

interface IProps {
    data: number[];
    type: string;
    width: string;
    text: string;
    substring: string;
}

export const extractChartProps = (str: string): { output: string; data: IProps } | null => {
    const regex = /<chart\s+(.*?)\/>/;

    // Extraer las propiedades como string
    const extractedProps = str.match(regex)

    if (!extractedProps) return null;
    
    const propertiesString = extractedProps[1];

    console.log('props: ', propertiesString);
    
    // Función para convertir las propiedades en un objeto
    const parseProps = (props: string) => {
      const obj: any = {};
      props.split(/\s+(?=\w+=)/).forEach(prop => {
        const [key, value] = prop.split('=');
        let parsedValue;

        if (value.startsWith('{') && value.endsWith('}')) {
            // Es un objeto o array
            parsedValue = eval(value.slice(1, -1));
          } else if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
            // Es un string
            parsedValue = value.slice(1, -1);
          } else {
            // Otros tipos de datos
            parsedValue = JSON.parse(value);
          }
          obj[key] = parsedValue;
      });
      return obj;
    };
    
    // Almacenar las propiedades en un objeto
    const props = parseProps(propertiesString);
    
    // Extraer propiedades individuales
    const { data, type, width, text, substring } = props as IProps;
    
    // Eliminar <DoughnutChart /> del string original
    const newStr = str.replace(regex, '').trim();
    console.log(newStr);

    return {
        data: {
            data,
            substring,
            text,
            type,
            width
        },
        output: newStr
    }
}

