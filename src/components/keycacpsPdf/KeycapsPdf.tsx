import { Page, Document, View, StyleSheet, Text } from '@react-pdf/renderer';
import { useLegendsContext } from '../../contexts/legendsContext';
import { Keycap } from '../../models/keycap/keycap';
import "./fontsRegistration.ts";


interface Props {
    keycaps: Keycap[];
}

const KeycapsPdf = ({ keycaps }: Props) => {
    const { byGlyph } = useLegendsContext();

    if (!byGlyph) {
        return <div></div>;
    }

    return (
        <Document>
            <Page size="A4" style={styles.page} wrap={true}>
                {keycaps.map((keycap, index) =>
                    <View
                        key={index}
                        style={[
                            styles.keycapShape,
                            styles.keycap,
                            { width: keycap.size * (45.6 - 7.6), /*~12mm - ~2mm*/ }
                        ]}>
                        {keycap.legends.map((glyph, index) => {
                            const legend = byGlyph[glyph];
                            return (
                                <View
                                    key={index}
                                    style={[
                                        styles.keycapShape,
                                        styles.legend,
                                        {
                                            justifyContent: legend.styles.justifyContent,
                                            alignItems: legend.styles.alignItems,
                                            width: keycap.size * (45.6 - 7.6), /*~12mm - ~2mm*/
                                        },
                                    ]}
                                    >
                                    <Text
                                        style={{
                                            fontFamily: legend.styles.fontFamily,
                                            fontSize: legend.styles.fontSize,
                                            textTransform: legend.styles.textTransform,
                                            color: legend.styles.color,
                                        }}
                                    >
                                        {legend.glyph}

                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                )}
            </Page>
        </Document>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 24,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    keycapShape: {
        display: "flex",
        flexDirection: "row",
        width: 38, /*~12mm - ~2mm*/
        height: 41.8,
        padding: 7.6, /*~2mm*/
        borderRadius: 10
    },
    keycap: {
        borderWidth: 1,
        borderColor: "grey",
        borderStyle: "solid",
        position: "relative"
    },
    legend: {
        position: "absolute",
        top: 0,
        left: 0
    }
})

export default KeycapsPdf;
