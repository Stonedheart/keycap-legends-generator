import { Page, Document, View, StyleSheet, Font, Text } from '@react-pdf/renderer';
import { Keycap } from '../../models/keycap/keycap';
import Justice from "../../fonts/justice.ttf";


Font.register({ family: 'Justice', format: "truetype", src: Justice });

interface Props {
    keycaps: Keycap[];
}

const KeycapsPdf = ({ keycaps }: Props) => (
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
                    {keycap.legends.map((legend, index) => (
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
                    ))}
                </View>    
            )}
        </Page>
    </Document>
)

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
