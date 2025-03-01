import ReactPDF, { StyleSheet } from '@react-pdf/renderer';

export const contactStyles = StyleSheet.create({
    contactText: {

    },
    contactWrapper: {
        flexDirection: 'row',
        display: "flex",
        justifyContent: "center",
        fontSize: 12,
        gap: 10
    },
    contactItem: {
        flexDirection: 'row',
        display: "flex",
        gap: 2,
        alignItems: "center"
    },
    contactLink: {
        flexDirection: 'row',
        display: "flex",
        gap: 10,
        justifyContent: "flex-start",
        marginLeft: 30,
        fontSize: 12,
        alignItems: "center",
        marginTop: 1
    },
    contactImage: {
        width: 25,
        height: 25,
    },
    link: {
        flexDirection: 'row',
        display: "flex",
        gap: 2,
        alignItems: "flex-start"
    },
});