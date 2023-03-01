import {List, ListItem, Navbar, Page} from "konsta/react";
import {BlockTitle} from "konsta/react";

export default function () {
    return (
        <>
            <Page>
                <Navbar title="Lista" />
                <BlockTitle>Simple List</BlockTitle>
                <List>
                    <ListItem title="Item 1" />
                    <ListItem title="Item 2" />
                    <ListItem title="Item 3" />
                </List>

                <BlockTitle>Strong List</BlockTitle>
                <List strong>
                    <ListItem title="Item 1" />
                    <ListItem title="Item 2" />
                    <ListItem title="Item 3" />
                </List>

                <BlockTitle>Strong Outline List</BlockTitle>
                <List strong outline>
                    <ListItem title="Item 1" />
                    <ListItem title="Item 2" />
                    <ListItem title="Item 3" />
                </List>
            </Page>
        </>
    );
}