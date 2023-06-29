import { ConversationId } from "../../Conversations/domain/ConversationId";
import { UserId } from "../../Users/domain/UserId";
import { MessageBody } from "./MessageBody";
import { MessageId } from "./MessageId";

export class Message {
	constructor(
		readonly id: MessageId,
		readonly body: MessageBody,
		readonly UserId: UserId,
		readonly ConversationId: ConversationId,
		readonly seenIds: UserId[]
	) {}

	static fromPrimitives(plainData: {
		id: string;
		body: string;
		UserId: string;
		ConversationId: string;
		seenIds: string[];
	}): Message {
		return new Message(
			new MessageId(plainData.id),
			new MessageBody(plainData.body),
			new UserId(plainData.UserId),
			new ConversationId(plainData.ConversationId),
			plainData.seenIds.map((userId) => new UserId(userId))
		);
	}

	toPrimitives(): any {
		return {
			id: this.id.value,
			body: this.body.value,
			UserId: this.UserId.value,
			ConversationId: this.ConversationId.value,
			seenIds: [],
		};
	}
}
